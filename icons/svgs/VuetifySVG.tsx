import React from 'react';

const VuetifySVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = ({
  height,
  width,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 128 128"
    className={className}
  >
    <path
      d="M64.004 0H34.102l29.902 61.848"
      fill="#1697F6"
    ></path>
    <path
      d="M64.004 80v48L0 18.664h33.527L64.004 80zm0-80h29.898L64.004 61.848"
      fill="#7BC6FF"
    ></path>
    <path
      d="M94.473 18.664H128L64.004 128V80l30.469-61.336z"
      fill="#AEDDFF"
    ></path>
  </svg>
);

export default VuetifySVG;
