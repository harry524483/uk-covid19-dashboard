import React, { lazy, Suspense } from 'react';

const Table = lazy(() => import('./Table'));

const CountryNameDictionary = {
  england: 'England',
  scotland: 'Scotland',
  wales: 'Wales',
  north_ireland: 'North Ireland',
};

const columns = ['S.No.', 'Country', 'Count'];

const DailyHospitalAdmissions = ({ data }) => {
  const latestRecord = data[data.length - 1];

  const rows: Array<any> = [];

  for (const [key, value] of Object.entries(latestRecord)) {
    const name = CountryNameDictionary[key];
    if (name) {
      rows.push([name, value]);
    }
  }

  return (
    <Suspense fallback={<div />}>
      <Table
        columns={columns}
        title="Daily Hospital Admissions"
        rows={rows}
        color="brown"
      ></Table>
    </Suspense>
  );
};

export default DailyHospitalAdmissions;
