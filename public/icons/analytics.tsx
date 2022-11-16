import * as React from "react";
import { SVGProps } from "react";
const SvgAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 1 0-2 0v9.991A3.004 3.004 0 0 0 4.995 19H21a1 1 0 0 0 0-2zm-3-8v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h3z" />
      <path d="M13.293 13.707a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 11.414l2.293 2.293z" />
    </g>
  </svg>
);
export default SvgAnalytics;
