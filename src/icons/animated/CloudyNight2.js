import * as React from "react";

const SvgCloudyNight2 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <defs>
      <filter id="cloudy-night-2_svg__blur" width="200%" height="200%">
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
          "@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-moon{0%,to{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(15deg);-moz-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg)}}@keyframes am-weather-moon-star-1{0%{opacity:0}to{opacity:1}}@keyframes am-weather-moon-star-2{0%{opacity:0}to{opacity:1}}"
        }
      </style>
    </defs>
    <g
      filter="url(#cloudy-night-2_svg__blur)"
      id="cloudy-night-2_svg__cloudy-night-2"
    >
      <path
        fill="orange"
        strokeMiterlimit={10}
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        transform="matrix(.8 0 0 .8 36 14)"
        style={{
          WebkitAnimationName: "am-weather-moon-star-1",
          MozAnimationName: "am-weather-moon-star-1",
          msAnimationName: "am-weather-moon-star-1",
          animationName: "am-weather-moon-star-1",
          WebkitAnimationDelay: "3s",
          MozAnimationDelay: "3s",
          msAnimationDelay: "3s",
          animationDelay: "3s",
          WebkitAnimationDuration: "5s",
          MozAnimationDuration: "5s",
          msAnimationDuration: "5s",
          animationDuration: "5s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: 1,
          MozAnimationIterationCount: 1,
          msAnimationIterationCount: 1,
          animationIterationCount: 1,
        }}
      />
      <path
        fill="orange"
        strokeMiterlimit={10}
        transform="matrix(.8 0 0 .8 52 22)"
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        style={{
          WebkitAnimationName: "am-weather-moon-star-2",
          MozAnimationName: "am-weather-moon-star-2",
          msAnimationName: "am-weather-moon-star-2",
          animationName: "am-weather-moon-star-2",
          WebkitAnimationDelay: "5s",
          MozAnimationDelay: "5s",
          msAnimationDelay: "5s",
          animationDelay: "5s",
          WebkitAnimationDuration: "4s",
          MozAnimationDuration: "4s",
          msAnimationDuration: "4s",
          animationDuration: "4s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: 1,
          MozAnimationIterationCount: 1,
          msAnimationIterationCount: 1,
          animationIterationCount: 1,
        }}
      />
      <path
        d="M14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="matrix(.8 0 0 .8 36 14)"
        style={{
          WebkitAnimationName: "am-weather-moon",
          MozAnimationName: "am-weather-moon",
          msAnimationName: "am-weather-moon",
          animationName: "am-weather-moon",
          WebkitAnimationDuration: "6s",
          MozAnimationDuration: "6s",
          msAnimationDuration: "6s",
          animationDuration: "6s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          msAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          msAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
          WebkitTransformOrigin: "12.5px 15.15px 0",
          MozTransformOrigin: "12.5px 15.15px 0",
          msTransformOrigin: "12.5px 15.15px 0",
          transformOrigin: "12.5px 15.15px 0",
        }}
      />
      <path
        d="M47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        transform="translate(0 -1)"
        style={{
          WebkitAnimationName: "am-weather-cloud-2",
          MozAnimationName: "am-weather-cloud-2",
          animationName: "am-weather-cloud-2",
          WebkitAnimationDuration: "3s",
          MozAnimationDuration: "3s",
          animationDuration: "3s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
      />
    </g>
  </svg>
);

export default SvgCloudyNight2;
