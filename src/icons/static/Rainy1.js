import * as React from "react";

const SvgRainy1 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="rainy-1_svg__a" width="200%" height="200%">
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
    <g filter="url(#rainy-1_svg__a)">
      <g transform="matrix(1.2 0 0 1.2 20 26)">
        <g className="rainy-1_svg__am-weather-sun">
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
          />
        </g>
        <circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
      </g>
      <path
        d="M45.545 35.09c0-3.91-3.145-6.97-6.97-6.97-.85 0-1.615.17-2.38.425-.255-2.89-2.635-5.27-5.61-5.27a5.695 5.695 0 0 0-5.695 5.695c0 .68.17 1.36.34 1.955-.255-.085-.595-.085-.85-.085a5.695 5.695 0 0 0-5.695 5.695c0 3.06 2.465 5.61 5.525 5.695h14.62c3.74-.425 6.715-3.4 6.715-7.14z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.275}
      />
      <g
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          className="rainy-1_svg__am-weather-rain-1"
          d="m27.918 45.943-1.39 7.878"
        />
        <path
          className="rainy-1_svg__am-weather-rain-2"
          d="m34.174 45.015-1.39 7.879"
        />
      </g>
    </g>
  </svg>
);

export default SvgRainy1;
