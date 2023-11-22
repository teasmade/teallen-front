import React from 'react';

const SkillsSVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = ({
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
      d="M19.89,9.55A1,1,0,0,0,19,9H14V3a1,1,0,0,0-.69-1,1,1,0,0,0-1.12.36l-8,11a1,1,0,0,0-.08,1A1,1,0,0,0,5,15h5v6a1,1,0,0,0,.69.95A1.12,1.12,0,0,0,11,22a1,1,0,0,0,.81-.41l8-11A1,1,0,0,0,19.89,9.55ZM12,17.92V14a1,1,0,0,0-1-1H7l5-6.92V10a1,1,0,0,0,1,1h4Z"
    ></path>
  </svg>
);

export default SkillsSVG;
