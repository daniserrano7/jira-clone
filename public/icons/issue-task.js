import * as React from "react";
const SvgIssueTask = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
    <rect fill="#4BADE8" width={14} height={14} rx={2} />
    <g stroke="#FFF" strokeWidth={2} strokeLinecap="round">
      <path d="m6 9.5 4-5M6 9.5l-2-2" />
    </g>
  </svg>
);
export default SvgIssueTask;
