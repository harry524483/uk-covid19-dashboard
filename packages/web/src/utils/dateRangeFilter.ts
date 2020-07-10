import moment from 'moment';

import DateRange from '../constants/DateRange';

const dateRangeFilter = (
  data: Array<{ date: string }>,
  dateRange: DateRange
): Array<any> => {
  const currentDate = moment().format('YYYY-MM-DD');

  if (dateRange === DateRange.Beginning) {
    return data;
  }

  if (dateRange === DateRange.OneMonth) {
    const oneMonthOldDate = moment().subtract(1, 'months').format('YYYY-MM-DD');

    return data.filter(({ date }) =>
      moment(date).isBetween(oneMonthOldDate, currentDate)
    );
  }

  if (dateRange === DateRange.TwoWeeks) {
    const twoWeeksOldDate = moment().subtract(2, 'weeks').format('YYYY-MM-DD');

    return data.filter(({ date }) =>
      moment(date).isBetween(twoWeeksOldDate, currentDate)
    );
  }

  return data;
};

export default dateRangeFilter;
