import React from 'react';

const BackSVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = ({
  height,
  width,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M8,6A1,1,0,1,0,7,5,1,1,0,0,0,8,6ZM21,19H14.82A3,3,0,0,0,13,17.18V15h4a3,3,0,0,0,3-3V10a3,3,0,0,0-.78-2A3,3,0,0,0,20,6V4a3,3,0,0,0-3-3H7A3,3,0,0,0,4,4V6a3,3,0,0,0,.78,2A3,3,0,0,0,4,10v2a3,3,0,0,0,3,3h4v2.18A3,3,0,0,0,9.18,19H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM6,4A1,1,0,0,1,7,3H17a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,6Zm1,9a1,1,0,0,1-1-1V10A1,1,0,0,1,7,9H17a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1Zm5,8a1,1,0,1,1,1-1A1,1,0,0,1,12,21ZM8,10a1,1,0,1,0,1,1A1,1,0,0,0,8,10Z"
    ></path>
  </svg>
);

export default BackSVG;
