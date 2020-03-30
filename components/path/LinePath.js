import * as React from 'react';
import {curveCatmullRom} from '@vx/curve';
import {LinePath as VxLinePath} from '@vx/shape';
import {AnimatedPath} from './AnimatedPath';

export const LinePath = ({
  curve = curveCatmullRom,
  data,
  x,
  y,
  ...remaining
}) => (
  <VxLinePath curve={curve} x={x} y={y}>
    {({path}) => <AnimatedPath {...remaining} d={path(data) || ''} />}
  </VxLinePath>
);