import React from 'react';
import { Button } from 'semantic-ui-react';

import DateRange from '../constants/DateRange';

const FilterButtonGroup = ({ chartDateRange, onDateRangeChange }) => {
  return (
    <Button.Group size="mini" floated="right">
      <Button
        onClick={() => onDateRangeChange(DateRange.Beginning)}
        className={
          chartDateRange === DateRange.Beginning ? 'selected' : undefined
        }
      >
        Beginning
      </Button>
      <Button
        onClick={() => onDateRangeChange(DateRange.OneMonth)}
        className={
          chartDateRange === DateRange.OneMonth ? 'selected' : undefined
        }
      >
        1 Month
      </Button>
      <Button
        onClick={() => onDateRangeChange(DateRange.TwoWeeks)}
        className={
          chartDateRange === DateRange.TwoWeeks ? 'selected' : undefined
        }
      >
        2 Weeks
      </Button>
    </Button.Group>
  );
};

export default FilterButtonGroup;
