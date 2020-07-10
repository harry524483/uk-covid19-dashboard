import React, { lazy, Suspense } from 'react';
import moment from 'moment';

import DateRange from '../constants/DateRange';
import dateRangeFilter from '../utils/dateRangeFilter';

const Chart = lazy(() => import('./Chart'));

type NewCasesChartProps = {
  newCases: Array<{ date: string; cases: number; average: number }>;
  dateRange: DateRange;
};

const NewCasesChart = ({ dateRange, newCases }: NewCasesChartProps) => {
  const createChartProps = () => {
    const filteredNewCases = dateRangeFilter(newCases, dateRange);

    const labels = filteredNewCases.map(({ date }) =>
      moment(date).format('DD MMM')
    );
    const cases = filteredNewCases.map(({ cases }) => cases);

    return {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            type: 'bar',
            label: 'Cases',
            data: cases,
            backgroundColor: '#FFA3A3',
          },
        ],
      },
      options: {
        responsive: true,
        legend: { display: false },
        title: {
          display: true,
          text: 'Daily confirmed cases in UK',
        },
        layout: {
          padding: 10,
        },
      },
    };
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Chart {...createChartProps()} backgroundColor="#FFECEC" />
    </Suspense>
  );
};

export default NewCasesChart;
