import * as React from "react";
const SvgEmpty = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      style={{
        lineHeight: "normal",
        textIndent: 0,
        textAlign: "start",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        textTransform: "none",
        blockProgression: "tb",
        isolation: "auto",
        mixBlendMode: "normal",
      }}
      d="M8 2C4.691 2 2 4.691 2 8c0 1.089.295 2.13.836 3.045l.746-.748A4.955 4.955 0 0 1 3 8c0-2.757 2.243-5 5-5 .816 0 1.593.215 2.297.582l.748-.746A5.964 5.964 0 0 0 8 2zm5.146.146-11 11 .708.708 1.275-1.276A5.975 5.975 0 0 0 8 14c3.308 0 6-2.692 6-6a5.978 5.978 0 0 0-1.422-3.871l1.276-1.275-.708-.708zm-1.29 2.706A4.946 4.946 0 0 1 13 8c0 2.768-2.232 5-5 5a4.945 4.945 0 0 1-3.148-1.145l7.003-7.003z"
      fontWeight={400}
      fontFamily="sans-serif"
      overflow="visible"
    />
  </svg>
);
export default SvgEmpty;
