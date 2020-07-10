import React, { useState } from 'react';
import useSWR from 'swr';
import { Grid } from 'semantic-ui-react';

import fetcher from '../utils/fetcher';
import GeoChart from './GeoChart';
import GeoLegend from './GeoLegend';
import FilterButtonGroup from './FilterButtonGroup';
import PeopleHospitalised from './PeopleHospitalised';
import DailyHospitalAdmissions from './DailyHospitalAdmissions';
import VentilatorBeds from './VentilatorBeds';
import Stats from './Stats';
import NewCasesChart from './NewCasesChart';
import DailyDeathsChart from './DailyDeathsChart';
import DateRange from '../constants/DateRange';

import 'semantic-ui-css/semantic.min.css';

const { Column, Row } = Grid;

const Dashboard = () => {
  const [chartDateRange, setChartDateRange] = useState(DateRange.OneMonth);
  const { data: dashboardData } = useSWR(
    'http://localhost:4000/dev/dashboard',
    fetcher,
    {
      revalidateOnFocus: false,
      suspense: true,
    }
  );

  return (
    <>
      <div className="banner">UK Covid19 Dashboard</div>
      <div className="dashboard-grid">
        <Grid centered>
          <Row>
            <Column mobile={16} tablet={8} computer={6}>
              <Stats data={dashboardData.overview} />
              <DailyHospitalAdmissions
                data={dashboardData.hospital_admissions}
              />
              <PeopleHospitalised data={dashboardData.people_hospitalised} />
              <VentilatorBeds data={dashboardData.ventilator_beds} />
            </Column>
            <Column mobile={16} tablet={8} computer={6}>
              <h2 className="map-title">UK Map</h2>
              <GeoChart data={dashboardData.regional_total_cases} />
              <GeoLegend />
              <NewCasesChart
                newCases={dashboardData.new_cases}
                dateRange={chartDateRange}
              />
              <DailyDeathsChart
                dateRange={chartDateRange}
                data={dashboardData.overview}
              />
              <FilterButtonGroup
                chartDateRange={chartDateRange}
                onDateRangeChange={setChartDateRange}
              />
            </Column>
          </Row>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
