import React from 'react'

const StarIcon = ({
  style = {},
  fill = '',
  stroke = '',
  cursor = 'pointer',
  width = '100%',
  className = '',
  viewBox = '0 0 17 16',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    cursor={cursor}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z"
      stroke={stroke}
    />
  </svg>
)

export default StarIcon
