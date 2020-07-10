import React, { useEffect, useRef } from "react";
import {
  select,
  scaleLinear,
  scaleThreshold,
  range,
  schemeBlues,
  axisBottom,
} from "d3";

import useResizeObserver from "../hooks/useResizeObserver";

const GeoLegend = () => {
  const svgRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const { width, height } =
      dimensions ||
      (wrapperRef.current && wrapperRef.current.getBoundingClientRect());

    const xScale = scaleLinear().domain([0, 60000]).rangeRound([0, width]);

    const colorScale = scaleThreshold()
      .domain(range(0, 60000, (60000 - 0) / 6))
      .range(schemeBlues["7"]);

    const svg = select(svgRef.current);

    svg.selectAll("g").remove();

    const g = svg
      .append("g")
      .style("transform", `translate(${width},${height})`);

    const legendData = colorScale.range().map((d) => {
      const values = colorScale.invertExtent(d);

      if (!values[0]) {
        values[0] = xScale.domain()[0];
      }
      if (!values[1]) {
        values[1] = xScale.domain()[1];
      }
      return values;
    });

    g.selectAll("rect")
      .data(legendData)
      .enter()
      .append("rect")
      .attr("height", 12)
      .attr("x", (d: any) => {
        return xScale(d[0]);
      })
      .attr("width", (d: any) => {
        return xScale(d[1]) - xScale(d[0]);
      })
      .attr("fill", (d: any) => {
        return colorScale(d[0]);
      });

    g.append("text")
      .attr("class", "legend-caption")
      .attr("x", xScale.range()[0])
      .attr("y", -6)
      .attr("fill", "#000")
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .text("Total cases");

    g.style("transform", `translateY(${height}px)`)
      .call(
        axisBottom(xScale)
          .tickSize(16)
          .tickFormat((x: any) => {
            return Math.round(x).toString();
          })
          .tickValues(colorScale.domain())
      )
      .select(".domain")
      .remove();
  }, [dimensions]);

  return (
    <>
      <div ref={wrapperRef}>
        <svg ref={svgRef} className="legend"></svg>
      </div>
    </>
  );
};

export default GeoLegend;
