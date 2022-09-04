import * as React from "react";

const SvgSnowy4 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="snowy-4_svg__blur" width="200%" height="200%">
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
      <style>
        {
          "@keyframes am-weather-snow{0%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}33.33%{-webkit-transform:translate(-1.2px,2px);-moz-transform:translate(-1.2px,2px);-ms-transform:translate(-1.2px,2px);transform:translate(-1.2px,2px)}66.66%{-webkit-transform:translate(1.4px,4px);-moz-transform:translate(1.4px,4px);-ms-transform:translate(1.4px,4px);transform:translate(1.4px,4px);opacity:1}to{-webkit-transform:translate(-1.6px,6px);-moz-transform:translate(-1.6px,6px);-ms-transform:translate(-1.6px,6px);transform:translate(-1.6px,6px);opacity:0}}"
        }
      </style>
    </defs>
    <g filter="url(#snowy-4_svg__blur)" id="snowy-4_svg__snowy-4">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <g
        style={{
          WebkitAnimationName: "am-weather-snow",
          MozAnimationName: "am-weather-snow",
          msAnimationName: "am-weather-snow",
          animationName: "am-weather-snow",
          WebkitAnimationDuration: "2s",
          MozAnimationDuration: "2s",
          msAnimationDuration: "2s",
          animationDuration: "2s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          msAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
      >
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M31 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -41.234 60.92)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -8 39)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 5.766 29.92)"
          d="M0-2.5v5"
        />
      </g>
    </g>
  </svg>
);

export default SvgSnowy4;