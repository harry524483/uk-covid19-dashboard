import React, { lazy, Suspense } from 'react';
import moment from 'moment';

import dateRangeFilter from '../utils/dateRangeFilter';

const Chart = lazy(() => import('./Chart'));

const DailyDeathsChart = ({ dateRange, data: { data } }) => {
  const createChartProps = () => {
    const filteredDailyDeaths = dateRangeFilter(data.dailyDeaths, dateRange);

    const labels = filteredDailyDeaths.map(({ date }) =>
      moment(date).format('DD MMM')
    );
    const cases = filteredDailyDeaths.map(({ value }) => value);

    return {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            type: 'bar',
            label: 'Cases',
            data: cases,
            backgroundColor: '#57E1CC',
          },
        ],
      },
      options: {
        responsive: true,
        legend: { display: false },
        title: {
          display: true,
          text: 'Daily deaths in UK',
        },
        layout: {
          padding: 10,
        },
      },
    };
  };

  return (
    <Suspense fallback={<div />}>
      <Chart {...createChartProps()} backgroundColor="#DFFDF8" />
    </Suspense>
  );
};

export default DailyDeathsChart;
