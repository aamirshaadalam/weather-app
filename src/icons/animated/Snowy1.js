import * as React from "react";

const SvgSnowy1 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="snowy-1_svg__blur" width="200%" height="200%">
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
          "@keyframes am-weather-sun{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes am-weather-sun-shiny{0%,to{stroke-dasharray:3px 10px;stroke-dashoffset:0}50%{stroke-dasharray:.1px 10px;stroke-dashoffset:-1px}}@keyframes am-weather-snow{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(-1.2px) translateY(2px);-moz-transform:translateX(-1.2px) translateY(2px);-ms-transform:translateX(-1.2px) translateY(2px);transform:translateX(-1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(1.4px) translateY(4px);-moz-transform:translateX(1.4px) translateY(4px);-ms-transform:translateX(1.4px) translateY(4px);transform:translateX(1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(-1.6px) translateY(6px);-moz-transform:translateX(-1.6px) translateY(6px);-ms-transform:translateX(-1.6px) translateY(6px);transform:translateX(-1.6px) translateY(6px);opacity:0}}.snowy-1_svg__am-weather-sun-shiny line{-webkit-animation-name:am-weather-sun-shiny;-moz-animation-name:am-weather-sun-shiny;-ms-animation-name:am-weather-sun-shiny;animation-name:am-weather-sun-shiny;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite}"
        }
      </style>
    </defs>
    <g filter="url(#snowy-1_svg__blur)" id="snowy-1_svg__snowy-1">
      <g transform="matrix(1.2 0 0 1.2 20 26)">
        <g
          style={{
            WebkitAnimationName: "am-weather-sun",
            MozAnimationName: "am-weather-sun",
            msAnimationName: "am-weather-sun",
            animationName: "am-weather-sun",
            WebkitAnimationDuration: "9s",
            MozAnimationDuration: "9s",
            msAnimationDuration: "9s",
            animationDuration: "9s",
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
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.275}
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
          d="M27 43.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -42.027 55.592)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -9.5 36.5)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 3.973 28.592)"
          d="M0-2.5v5"
        />
      </g>
      <g
        style={{
          WebkitAnimationName: "am-weather-snow",
          MozAnimationName: "am-weather-snow",
          msAnimationName: "am-weather-snow",
          animationName: "am-weather-snow",
          WebkitAnimationDelay: "1.2s",
          MozAnimationDelay: "1.2s",
          msAnimationDelay: "1.2s",
          animationDelay: "1.2s",
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
          d="M36 43.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -37.527 66.456)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -5 41)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 8.473 30.456)"
          d="M0-2.5v5"
        />
      </g>
    </g>
  </svg>
);

export default SvgSnowy1;
