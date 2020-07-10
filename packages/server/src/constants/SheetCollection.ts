import SheetOptions from '../types/SheetOptions';

const SheetCollection: Array<SheetOptions> = [
  {
    sheetName: 'New Cases (UK)',
    skipRowsFromTop: 5,
    columnToKey: {
      A: 'date',
      B: 'cases',
      C: 'average',
    },
    required: true,
    name: 'new_cases',
  },
  {
    sheetName: 'Hospital Admissions (UK)',
    skipRowsFromTop: 3,
    columnToKey: {
      A: 'date',
      B: 'england',
      C: 'scotland',
      D: 'wales',
      E: 'north_ireland',
    },
    required: true,
    name: 'hospital_admissions',
  },
  {
    sheetName: 'Ventilator Beds (UK)',
    skipRowsFromTop: 3,
    columnToKey: {
      A: 'date',
      B: 'england',
      C: 'scotland',
      D: 'wales',
      E: 'north_ireland',
      F: 'uk',
    },
    required: true,
    name: 'ventilator_beds',
  },
  {
    sheetName: 'People in Hospital (UK)',
    skipRowsFromTop: 4,
    columnToKey: {
      A: 'date',
      B: 'east_england',
      C: 'london',
      D: 'midlands',
      E: 'north_east_yorkshire',
      F: 'north_west',
      G: 'south_east',
      H: 'south_west',
      I: 'scotland',
      J: 'wales',
      K: 'north_ireland',
    },
    required: true,
    name: 'people_hospitalised',
  },
  {
    sheetName: 'Daily COVID-19 Deaths (UK)',
    skipRowsFromTop: 3,
    columnToKey: {
      A: 'date',
      B: 'deaths',
      C: 'total_deaths',
      D: 'average',
      E: 'sum',
    },
    required: false,
    name: 'daily_deaths',
  },
];

export default SheetCollection;
