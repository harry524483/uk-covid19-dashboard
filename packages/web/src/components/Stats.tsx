import React from 'react';
import { animated, useSprings, useTrail } from 'react-spring';

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

  const trail = useTrail(5, {
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    transform: 'translate3d(0, 0px, 0)',
    opacity: 1,
    config: { mass: 1, tension: 2000, friction: 200 },
  });

  return (
    <>
      <animated.p style={trail[0]}>
        Last updated on {formatDate(metadata.lastUpdatedAt)}
      </animated.p>
      <div className="stats-container">
        {props.map(({ value, colorClass, name }, index: number) => (
          <div
            className={`stats-container-item ${colorClass.value}`}
            key={index}
          >
            <animated.p className="stats-label" style={trail[index + 1]}>
              {name.value}
            </animated.p>
            <animated.div className="stats-value" style={trail[index + 1]}>
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
