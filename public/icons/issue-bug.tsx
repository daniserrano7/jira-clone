import * as React from "react";
import { SVGProps } from "react";
const SvgIssueBug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <rect fill="#E5493A" width={14} height={14} rx={2} />
      <path d="M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="#FFF" />
    </g>
  </svg>
);
export default SvgIssueBug;
