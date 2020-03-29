import * as React from 'react';
import {Marker} from '@vx/marker';
import {useGraphData} from './useGraphData';

export const VMarker = ({anchor = 'start', value, ...props}) => {
  const {xScale, yMax} = useGraphData();
  const start = {x: xScale(value), y: 0};
  const end = {x: xScale(value), y: yMax};
  const isStart = anchor === 'start';

  const from = isStart ? start : end;
  const to = isStart ? end : start;

  return <Marker {...props} from={from} to={to} />;
};

export const HMarker = ({anchor = 'start', value, ...props}) => {
  const {yScale, xMax} = useGraphData();
  const start = {x: 0, y: yScale(value)};
  const end = {x: xMax, y: yScale(value)};
  const isStart = anchor === 'start';

  const from = isStart ? start : end;
  const to = isStart ? end : start;

  return <Marker {...props} from={from} to={to} />;
};