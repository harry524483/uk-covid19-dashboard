import React, { useState, lazy, Suspense } from 'react';
import useSWR from 'swr';
import { Grid } from 'semantic-ui-react';
import { useTrail, animated } from 'react-spring';

import fetcher from '../utils/fetcher';
import DateRange from '../constants/DateRange';

import 'semantic-ui-css/semantic.min.css';

const GeoChart = lazy(() => import('./GeoChart'));
const GeoLegend = lazy(() => import('./GeoLegend'));
const FilterButtonGroup = lazy(() => import('./FilterButtonGroup'));
const PeopleHospitalised = lazy(() => import('./PeopleHospitalised'));
const DailyHospitalAdmissions = lazy(() => import('./DailyHospitalAdmissions'));
const VentilatorBeds = lazy(() => import('./VentilatorBeds'));
const Stats = lazy(() => import('./Stats'));
const NewCasesChart = lazy(() => import('./NewCasesChart'));
const DailyDeathsChart = lazy(() => import('./DailyDeathsChart'));

const { Column, Row } = Grid;

const Dashboard = () => {
  const [chartDateRange, setChartDateRange] = useState(DateRange.OneMonth);

  const { data: dashboardData } = useSWR('/dashboard', fetcher, {
    revalidateOnFocus: false,
    suspense: true,
  });

  const trail = useTrail(5, {
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    transform: 'translate3d(0, 0px, 0)',
    opacity: 1,
    config: { mass: 1, tension: 2000, friction: 200 },
  });

  return (
    <>
      <div className="banner">UK Covid19 Dashboard</div>
      <div className="dashboard-grid">
        <Grid centered>
          <Row>
            <Column mobile={16} tablet={8} computer={6}>
              <Suspense fallback={<div />}>
                <Stats data={dashboardData.overview} />
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[1]}>
                  <DailyHospitalAdmissions
                    data={dashboardData.hospital_admissions}
                  />
                </animated.div>
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[2]}>
                  <PeopleHospitalised
                    data={dashboardData.people_hospitalised}
                  />
                </animated.div>
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[3]}>
                  <VentilatorBeds data={dashboardData.ventilator_beds} />
                </animated.div>
              </Suspense>
            </Column>
            <Column mobile={16} tablet={8} computer={6}>
              <animated.h2 className="map-title" style={trail[4]}>
                UK Map
              </animated.h2>
              <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
                <animated.div style={trail[3]}>
                  <GeoChart data={dashboardData.regional_total_cases} />
                </animated.div>
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[3]}>
                  <GeoLegend />
                </animated.div>
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[1]}>
                  <NewCasesChart
                    newCases={dashboardData.new_cases}
                    dateRange={chartDateRange}
                  />
                </animated.div>
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[2]}>
                  <DailyDeathsChart
                    dateRange={chartDateRange}
                    data={dashboardData.overview}
                  />
                </animated.div>
              </Suspense>
              <Suspense fallback={<div />}>
                <animated.div style={trail[2]}>
                  <FilterButtonGroup
                    chartDateRange={chartDateRange}
                    onDateRangeChange={setChartDateRange}
                  />
                </animated.div>
              </Suspense>
            </Column>
          </Row>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
