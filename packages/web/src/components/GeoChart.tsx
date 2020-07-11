import React, { useEffect, useRef } from 'react';
import * as topojson from 'topojson';
import {
  geoPath,
  geoMercator,
  select,
  scaleThreshold,
  range,
  schemeBlues,
} from 'd3';
import useSWR from 'swr';

import useResizeObserver from '../hooks/useResizeObserver';
import fetcher from '../utils/fetcher';

const GeoChart = ({ data: { data: totalCases } }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(wrapperRef);

  const { data: geoData } = useSWR('/geo-data', fetcher, {
    revalidateOnFocus: false,
    suspense: true,
  });

  useEffect(() => {
    const topology = topojson.feature(geoData, geoData.objects.regions);

    const { width, height } =
      dimensions ||
      (wrapperRef.current && wrapperRef.current.getBoundingClientRect());

    const projection = geoMercator().fitSize([width, height], topology);

    const path = geoPath().projection(projection) as any;

    const colorScale = scaleThreshold()
      .domain(range(0, 60000, (60000 - 0) / 6))
      .range(schemeBlues['7']);

    const svg = select(svgRef.current);

    svg
      .selectAll('.country')
      .data(topology.features)
      .join('path')
      .style('stroke', '#FFFFFF')
      .on('mouseenter', (d: any) => {
        svg
          .selectAll(`.country.${d.properties.nuts118cd}`)
          .transition()
          .duration(200)
          .style('stroke', '#005B9A');

        svg
          .append('text')
          .attr('class', 'chart-stats')
          .attr('y', 20)
          .attr('fill', '#952B60')
          .style('font-weight', 'bold')
          .append('tspan')
          .text(() => {
            const result = totalCases.find(
              ({ name }) => d.properties.nuts118nm === name
            );
            if (result) {
              return d.properties.nuts118nm;
            }
            return 'Unknown';
          })
          .attr('x', 0)
          .attr('dx', 0)
          .attr('dy', 25)
          .append('tspan')
          .text(() => {
            const result = totalCases.find(
              ({ name }) => d.properties.nuts118nm === name
            );
            if (result) {
              return result.totalCases.toLocaleString();
            }
            return 0;
          })
          .attr('x', 0)
          .attr('dx', 0)
          .attr('dy', 30);
      })
      .on('mouseleave', (d: any) => {
        svg
          .select(`.country.${d.properties.nuts118cd}`)
          .transition()
          .duration(200)
          .style('stroke', '#FFFFFF');

        svg.selectAll('.chart-stats').remove();
      })
      .attr('class', 'country')
      .style('cursor', 'pointer')
      .attr('fill', (d: any) => {
        const result = totalCases.find(
          ({ name }) => d.properties.nuts118nm === name
        );

        if (result) {
          return colorScale(result.totalCases);
        }
        return colorScale(0);
      })
      .attr('class', (d: any) => `country ${d.properties.nuts118cd}`)
      .attr('d', path);

    svg
      .append('text')
      .attr('class', 'chart-title')
      .attr('x', 0)
      .attr('y', 20)
      .attr('fill', '#952B60')
      .style('font-weight', 'bolder')
      .text('Total Cases');
  }, [dimensions, geoData, totalCases]);

  return (
    <>
      <div ref={wrapperRef} style={{ marginTop: '1.5rem' }}>
        <svg ref={svgRef} className="country"></svg>
      </div>
    </>
  );
};

export default GeoChart;
