import React from 'react';
import './Diagram.css';

function Diagram({ width, height, data, padding }) {
  const maxHeight = Math.max(...data);

  return (
    <svg
      width="100%"
      height={maxHeight}
      viewBox={`0 0 ${width} ${maxHeight}`}
      className="svg"
      version="1.1"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="bar chart"
      role="img"
    >
      {data.map((bar, index) => (
        <g key={index}>
          <title>Count {bar}</title>
          <rect
            y={`${maxHeight - bar}px`}
            x={`${index * (width / data.length)}px`}
            width={`${width / data.length - padding}px`}
            height={`${bar}px`}
            fill="#468ec1"
            className="svg__rect"
          />
        </g>
      ))}
    </svg>
  );
}

export default Diagram;
