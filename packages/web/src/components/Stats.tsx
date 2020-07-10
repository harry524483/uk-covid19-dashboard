import React from 'react';
import { animated, useSprings } from 'react-spring';

import formatNumber from '../utils/formatNumber';
import formatDate from '../utils/formatDate';

const Stats = ({ data: { data, metadata } }) => {
  const statsInfo = [
    {
      name: 'Total Cases',
      colorClass: 'color-blue',
      value: data.totalCases.value,
    },
    {
      name: 'Daily Cases',
      colorClass: 'color-brown',
      value: data.newCases.value,
    },
    {
      name: 'Daily Deaths',
      colorClass: 'color-red',
      value: data.latestDeaths.value,
    },
    {
      name: 'Total Deaths',
      colorClass: 'color-orange',
      value: data.deaths.value,
    },
  ];

  const props = useSprings(
    statsInfo.length,
    statsInfo.map(({ value, colorClass, name }) => ({
      from: { value: 0 },
      value,
      colorClass,
      name,
    }))
  ) as any;

  return (
    <>
      <p>Last updated on {formatDate(metadata.lastUpdatedAt)}</p>
      <div className="stats-container">
        {props.map(({ value, colorClass, name }, index: number) => (
          <div
            className={`stats-container-item ${colorClass.value}`}
            key={index}
          >
            <p className="stats-label">{name.value}</p>
            <animated.div className="stats-value">
              {value.interpolate((val: number) =>
                formatNumber(Math.floor(val))
              )}
            </animated.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stats;
