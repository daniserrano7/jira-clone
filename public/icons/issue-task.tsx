import * as React from "react";
import { SVGProps } from "react";
const SvgIssueTask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
    <rect fill="#4BADE8" width={14} height={14} rx={2} />
    <g stroke="#FFF" strokeWidth={2} strokeLinecap="round">
      <path d="m6 9.5 4-5M6 9.5l-2-2" />
    </g>
  </svg>
);
export default SvgIssueTask;
