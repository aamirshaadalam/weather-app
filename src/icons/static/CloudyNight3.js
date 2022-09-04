import * as React from "react";

const SvgCloudyNight3 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="cloudy-night-3_svg__a" width="200%" height="200%">
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
    <g filter="url(#cloudy-night-3_svg__a)">
      <path
        fill="orange"
        d="m38.64 15.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
        className="cloudy-night-3_svg__am-weather-moon-star-1"
      />
      <path
        fill="orange"
        d="m54.64 23.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
        className="cloudy-night-3_svg__am-weather-moon-star-2"
      />
      <path
        d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={1.6}
        className="cloudy-night-3_svg__am-weather-moon"
      />
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="cloudy-night-3_svg__am-weather-cloud-2"
      />
    </g>
  </svg>
);

export default SvgCloudyNight3;
