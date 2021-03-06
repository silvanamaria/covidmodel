import * as React from 'react';
import classNames from 'classnames';

const scaleLabels = {
  linear: 'Linear',
  log: 'Log',
};
const scales = Object.keys(scaleLabels);

export const GraphControls = ({scale, setScale}) => (
  <div>
    <style jsx>{`
      div {
        display: flex;
        justify-content: flex-end;
        clear: both;
      }
      a {
        display: block;
        margin-left: var(--spacing1);
        color: var(--color-gray2);
        transition: 200ms;
      }
      a.active {
        color: var(--color-gray5);
      }
      a:hover {
        color: var(--color-gray6);
      }
    `}</style>
    {scales.map((s) => (
      <a
        key={s}
        className={classNames('text-small', {active: scale === s})}
        role="button"
        onClick={() => setScale(s)}
      >
        {scaleLabels[s]}
      </a>
    ))}
  </div>
);
