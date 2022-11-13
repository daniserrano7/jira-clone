import * as React from "react";
const SvgQuestion = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g fillRule="evenodd">
      <circle fill="currentColor" cx={12} cy={12} r={10} />
      <circle fill="inherit" cx={12} cy={18} r={1} />
      <path
        d="M15.89 9.05a3.975 3.975 0 0 0-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 0 0 .982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 0 1 4.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 0 0-1 .987v2.014a1.001 1.001 0 0 0 2.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0 0 15.89 9.05"
        fill="inherit"
      />
    </g>
  </svg>
);
export default SvgQuestion;
