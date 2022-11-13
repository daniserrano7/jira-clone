import * as React from "react";
import { SVGProps } from "react";
const SvgBacklog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17v2.002zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0 1 17.006 21H4.994A1.998 1.998 0 0 1 3 19.002v-2.004z" />
      <path d="M5 15h12v-2H5v2zm-2-4h16v6H3v-6z" />
      <path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9v2.002zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0 1 19.006 13H6.994A1.998 1.998 0 0 1 5 11.002V8.998z" />
      <path d="M5 5v2h12V5H5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3V4.998z" />
    </g>
  </svg>
);
export default SvgBacklog;
