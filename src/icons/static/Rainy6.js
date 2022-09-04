import * as React from "react";

const SvgRainy6 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="rainy-6_svg__a" width="200%" height="200%">
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
    <g filter="url(#rainy-6_svg__a)">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <g
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          className="rainy-6_svg__am-weather-rain-1"
          d="m26.887 46.29-1.39 7.879"
        />
        <path
          className="rainy-6_svg__am-weather-rain-2"
          d="m31.174 45.015-1.39 7.879"
        />
        <path
          className="rainy-6_svg__am-weather-rain-1"
          d="m34.94 46.695-1.39 7.878"
        />
      </g>
    </g>
  </svg>
);

export default SvgRainy6;
