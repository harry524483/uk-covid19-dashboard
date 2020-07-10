import React, { useRef, useEffect } from 'react';
import ChartJS from 'chart.js';

ChartJS.defaults.scale.gridLines.drawOnChartArea = false;

type ChartProps = {
  type: string;
  data: any;
  options: any;
  backgroundColor: string;
};

const Chart = (props: ChartProps) => {
  const convasElement = useRef(null);

  useEffect(() => {
    const { type, data, options } = props;

    const chartInstance = new ChartJS(convasElement.current, {
      type,
      data,
      options,
    });
    return () => {
      chartInstance.destroy();
    };
  }, [props]);

  return (
    <div
      style={{
        background: props.backgroundColor,
        marginBottom: '15px',
      }}
    >
      <canvas ref={convasElement} />
    </div>
  );
};

export default Chart;
