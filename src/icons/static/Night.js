import * as React from "react";

const SvgNight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="night_svg__a" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope={0.05} />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#night_svg__a)">
      <path
        fill="orange"
        d="m23.3 21.5.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2-1.2-.7 1.2-.6z"
        className="night_svg__am-weather-moon-star-1"
      />
      <path
        fill="orange"
        d="m43.3 31.5.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2-1.2-.7 1.2-.6z"
        className="night_svg__am-weather-moon-star-2"
      />
      <path
        d="M34.5 33.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={2}
        className="night_svg__am-weather-moon"
      />
    </g>
  </svg>
);

export default SvgNight;
