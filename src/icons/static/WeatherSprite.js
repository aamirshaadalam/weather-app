import * as React from "react";

const SvgWeatherSprite = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      width: 0,
      height: 0,
    }}
    width={0}
    height={0}
    {...props}
  >
    <defs>
      <style>
        {
          "@keyframes am-weather-cloud-1{0%,to{-webkit-transform:translate(-5px,0);-moz-transform:translate(-5px,0);-ms-transform:translate(-5px,0);transform:translate(-5px,0)}50%{-webkit-transform:translate(10px,0);-moz-transform:translate(10px,0);-ms-transform:translate(10px,0);transform:translate(10px,0)}}@keyframes am-weather-cloud-2{0%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}50%{-webkit-transform:translate(2px,0);-moz-transform:translate(2px,0);-ms-transform:translate(2px,0);transform:translate(2px,0)}}@keyframes am-weather-stroke{0%,12%,16%,20%,24%,28%,4%,8%,to{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}10%,14%,18%,2%{-webkit-transform:translate(.3px,0);-moz-transform:translate(.3px,0);-ms-transform:translate(.3px,0);transform:translate(.3px,0)}6%{-webkit-transform:translate(.5px,.4px);-moz-transform:translate(.5px,.4px);-ms-transform:translate(.5px,.4px);transform:translate(.5px,.4px)}22%{-webkit-transform:translate(1px,0);-moz-transform:translate(1px,0);-ms-transform:translate(1px,0);transform:translate(1px,0)}26%{-webkit-transform:translate(-1px,0);-moz-transform:translate(-1px,0);-ms-transform:translate(-1px,0);transform:translate(-1px,0)}40%{fill:orange;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}65%{fill:#fff;-webkit-transform:translate(-1px,5px);-moz-transform:translate(-1px,5px);-ms-transform:translate(-1px,5px);transform:translate(-1px,5px)}61%{fill:orange}}@keyframes am-weather-sun{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes am-weather-sun-shiny{0%,to{stroke-dasharray:3px 10px;stroke-dashoffset:0}50%{stroke-dasharray:.1px 10px;stroke-dashoffset:-1px}}@keyframes am-weather-moon{0%,to{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(15deg);-moz-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg)}}@keyframes am-weather-moon-star-1{0%{opacity:0}to{opacity:1}}@keyframes am-weather-moon-star-2{0%{opacity:0}to{opacity:1}}@keyframes am-weather-rain{0%{stroke-dashoffset:0}to{stroke-dashoffset:-100}}@keyframes am-weather-snow{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(-1.2px) translateY(2px);-moz-transform:translateX(-1.2px) translateY(2px);-ms-transform:translateX(-1.2px) translateY(2px);transform:translateX(-1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(1.4px) translateY(4px);-moz-transform:translateX(1.4px) translateY(4px);-ms-transform:translateX(1.4px) translateY(4px);transform:translateX(1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(-1.6px) translateY(6px);-moz-transform:translateX(-1.6px) translateY(6px);-ms-transform:translateX(-1.6px) translateY(6px);transform:translateX(-1.6px) translateY(6px);opacity:0}}@keyframes am-weather-snow-reverse{0%{-webkit-transform:translateX(0) translateY(0);-moz-transform:translateX(0) translateY(0);-ms-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}33.33%{-webkit-transform:translateX(1.2px) translateY(2px);-moz-transform:translateX(1.2px) translateY(2px);-ms-transform:translateX(1.2px) translateY(2px);transform:translateX(1.2px) translateY(2px)}66.66%{-webkit-transform:translateX(-1.4px) translateY(4px);-moz-transform:translateX(-1.4px) translateY(4px);-ms-transform:translateX(-1.4px) translateY(4px);transform:translateX(-1.4px) translateY(4px);opacity:1}to{-webkit-transform:translateX(1.6px) translateY(6px);-moz-transform:translateX(1.6px) translateY(6px);-ms-transform:translateX(1.6px) translateY(6px);transform:translateX(1.6px) translateY(6px);opacity:0}}.weather-sprite_svg__am-weather-cloud-1{-webkit-animation-name:am-weather-cloud-1;-moz-animation-name:am-weather-cloud-1;animation-name:am-weather-cloud-1;-webkit-animation-duration:7s;-moz-animation-duration:7s;animation-duration:7s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;animation-timing-function:linear}.weather-sprite_svg__am-weather-cloud-1,.weather-sprite_svg__am-weather-cloud-2,.weather-sprite_svg__am-weather-sun{-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-iteration-count:infinite}.weather-sprite_svg__am-weather-cloud-2{-webkit-animation-name:am-weather-cloud-2;-moz-animation-name:am-weather-cloud-2;animation-name:am-weather-cloud-2;-webkit-animation-duration:3s;-moz-animation-duration:3s;animation-duration:3s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;animation-timing-function:linear}.weather-sprite_svg__am-weather-sun{-webkit-animation-name:am-weather-sun;-moz-animation-name:am-weather-sun;-ms-animation-name:am-weather-sun;animation-name:am-weather-sun;-webkit-animation-duration:9s;-moz-animation-duration:9s;-ms-animation-duration:9s;animation-duration:9s;-ms-animation-iteration-count:infinite}.weather-sprite_svg__am-weather-sun-shiny line{-webkit-animation-name:am-weather-sun-shiny;-moz-animation-name:am-weather-sun-shiny;-ms-animation-name:am-weather-sun-shiny;animation-name:am-weather-sun-shiny;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;animation-duration:2s}.weather-sprite_svg__am-weather-moon,.weather-sprite_svg__am-weather-moon-star-1,.weather-sprite_svg__am-weather-moon-star-2,.weather-sprite_svg__am-weather-sun,.weather-sprite_svg__am-weather-sun-shiny line{-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;animation-timing-function:linear}.weather-sprite_svg__am-weather-moon,.weather-sprite_svg__am-weather-sun-shiny line{-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite}.weather-sprite_svg__am-weather-moon{-webkit-animation-name:am-weather-moon;-moz-animation-name:am-weather-moon;-ms-animation-name:am-weather-moon;animation-name:am-weather-moon;-webkit-animation-duration:6s;-moz-animation-duration:6s;-ms-animation-duration:6s;animation-duration:6s;-webkit-transform-origin:12.5px 15.15px 0;-moz-transform-origin:12.5px 15.15px 0;-ms-transform-origin:12.5px 15.15px 0;transform-origin:12.5px 15.15px 0}.weather-sprite_svg__am-weather-moon-star-1,.weather-sprite_svg__am-weather-moon-star-2{-webkit-animation-name:am-weather-moon-star-1;-moz-animation-name:am-weather-moon-star-1;-ms-animation-name:am-weather-moon-star-1;animation-name:am-weather-moon-star-1;-webkit-animation-delay:3s;-moz-animation-delay:3s;-ms-animation-delay:3s;animation-delay:3s;-webkit-animation-duration:5s;-moz-animation-duration:5s;-ms-animation-duration:5s;animation-duration:5s;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;animation-iteration-count:1}.weather-sprite_svg__am-weather-moon-star-2{-webkit-animation-name:am-weather-moon-star-2;-moz-animation-name:am-weather-moon-star-2;-ms-animation-name:am-weather-moon-star-2;animation-name:am-weather-moon-star-2;-webkit-animation-delay:5s;-moz-animation-delay:5s;-ms-animation-delay:5s;animation-delay:5s;-webkit-animation-duration:4s;-moz-animation-duration:4s;-ms-animation-duration:4s;animation-duration:4s}.weather-sprite_svg__am-weather-rain-1{-webkit-animation-name:am-weather-rain;-moz-animation-name:am-weather-rain;-ms-animation-name:am-weather-rain;animation-name:am-weather-rain;-webkit-animation-duration:8s;-moz-animation-duration:8s;-ms-animation-duration:8s;animation-duration:8s}.weather-sprite_svg__am-weather-rain-1,.weather-sprite_svg__am-weather-rain-2,.weather-sprite_svg__am-weather-snow-1,.weather-sprite_svg__am-weather-snow-2{-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-iteration-count:infinite}.weather-sprite_svg__am-weather-rain-2{-webkit-animation-name:am-weather-rain;-moz-animation-name:am-weather-rain;-ms-animation-name:am-weather-rain;animation-name:am-weather-rain;-webkit-animation-delay:.25s;-moz-animation-delay:.25s;-ms-animation-delay:.25s;animation-delay:.25s;-webkit-animation-duration:8s;-moz-animation-duration:8s;-ms-animation-duration:8s;animation-duration:8s}.weather-sprite_svg__am-weather-snow-1,.weather-sprite_svg__am-weather-snow-2{-webkit-animation-name:am-weather-snow;-moz-animation-name:am-weather-snow;-ms-animation-name:am-weather-snow;animation-name:am-weather-snow;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;animation-duration:2s}.weather-sprite_svg__am-weather-snow-2{-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-ms-animation-delay:1.2s;animation-delay:1.2s}"
        }
      </style>
    </defs>
    <symbol id="weather-sprite_svg__thunder" viewBox="0 0 64 64">
      <path
        d="M38.62 25.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 0 0-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 0 0-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={0.72}
        className="weather-sprite_svg__am-weather-cloud-1"
      />
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        fill="orange"
        stroke="#fff"
        style={{
          WebkitAnimationName: "am-weather-stroke",
          MozAnimationName: "am-weather-stroke",
          animationName: "am-weather-stroke",
          WebkitAnimationDuration: "1.11s",
          MozAnimationDuration: "1.11s",
          animationDuration: "1.11s",
          WebkitAnimationTimingFunction: "linear",
          MozAnimationTimingFunction: "linear",
          animationTimingFunction: "linear",
          WebkitAnimationIterationCount: "infinite",
          MozAnimationIterationCount: "infinite",
          animationIterationCount: "infinite",
        }}
        d="M14.3-2.9h6.2l-4.1 7.2h3.9l-8.8 10.3 3.4-7.7h-3.8z"
        transform="matrix(1.2 0 0 1.2 11 38)"
      />
    </symbol>
    <symbol id="weather-sprite_svg__day" viewBox="0 0 64 64">
      <g transform="translate(32 32)">
        <g
          className="weather-sprite_svg__am-weather-sun weather-sprite_svg__am-weather-sun-shiny"
          style={{
            WebkitAnimationTimingFunction: "ease-in-out",
            MozAnimationTimingFunction: "ease-in-out",
            msAnimationTimingFunction: "ease-in-out",
            animationTimingFunction: "ease-in-out",
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
    </symbol>
    <symbol id="weather-sprite_svg__night" viewBox="0 0 64 64">
      <path
        fill="orange"
        strokeMiterlimit={10}
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        transform="translate(20 20)"
        className="weather-sprite_svg__am-weather-moon-star-1"
      />
      <path
        fill="orange"
        strokeMiterlimit={10}
        transform="translate(40 30)"
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        className="weather-sprite_svg__am-weather-moon-star-2"
      />
      <path
        d="M34.5 33.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={2}
        className="weather-sprite_svg__am-weather-moon"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy-day-1" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#C6DEFF"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy-night-1" viewBox="0 0 64 64">
      <path
        fill="orange"
        strokeMiterlimit={10}
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        transform="matrix(.8 0 0 .8 36 14)"
        className="weather-sprite_svg__am-weather-moon-star-1"
      />
      <path
        fill="orange"
        strokeMiterlimit={10}
        transform="matrix(.8 0 0 .8 52 22)"
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        className="weather-sprite_svg__am-weather-moon-star-2"
      />
      <path
        d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={1.6}
        className="weather-sprite_svg__am-weather-moon"
      />
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#C6DEFF"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy-day-2" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy-night-2" viewBox="0 0 64 64">
      <path
        fill="orange"
        strokeMiterlimit={10}
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        transform="matrix(.8 0 0 .8 36 14)"
        className="weather-sprite_svg__am-weather-moon-star-1"
      />
      <path
        fill="orange"
        strokeMiterlimit={10}
        transform="matrix(.8 0 0 .8 52 22)"
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        className="weather-sprite_svg__am-weather-moon-star-2"
      />
      <path
        d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={1.6}
        className="weather-sprite_svg__am-weather-moon"
      />
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy-day-3" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy-night-3" viewBox="0 0 64 64">
      <path
        fill="orange"
        strokeMiterlimit={10}
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        transform="matrix(.8 0 0 .8 36 14)"
        className="weather-sprite_svg__am-weather-moon-star-1"
      />
      <path
        fill="orange"
        strokeMiterlimit={10}
        transform="matrix(.8 0 0 .8 52 22)"
        d="M3.3 1.5 4 2.7l1.2.6L4 4l-.7 1.2L2.7 4l-1.2-.7 1.2-.6z"
        className="weather-sprite_svg__am-weather-moon-star-2"
      />
      <path
        d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
        fill="orange"
        stroke="orange"
        strokeLinejoin="round"
        strokeWidth={1.6}
        className="weather-sprite_svg__am-weather-moon"
      />
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__cloudy" viewBox="0 0 64 64">
      <path
        d="M38.62 23.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 0 0-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 0 0-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
        fill="#91C0F8"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={0.72}
        className="weather-sprite_svg__am-weather-cloud-1"
      />
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-1" viewBox="0 0 64 64">
      <g transform="matrix(1.2 0 0 1.2 20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m27.918 45.943-1.39 7.878"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-2"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m34.174 45.015-1.39 7.879"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-2" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m30.918 44.943-1.39 7.878"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-3" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
          <path
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3"
          />
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="m-6.364 6.364-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
          />
        </g>
        <circle fill="orange" r={5} stroke="orange" strokeWidth={2} />
      </g>
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m27.918 45.943-1.39 7.878"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-2"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m34.174 45.015-1.39 7.879"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-4" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m30.918 44.943-1.39 7.878"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-5" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m27.918 45.943-1.39 7.878"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-2"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,7"
        strokeLinecap="round"
        strokeWidth={2}
        d="m34.174 45.015-1.39 7.879"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-6" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth={2}
        d="m26.887 46.29-1.39 7.879"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-2"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth={2}
        d="m31.174 45.015-1.39 7.879"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="4,4"
        strokeLinecap="round"
        strokeWidth={2}
        d="m34.94 46.695-1.39 7.878"
      />
    </symbol>
    <symbol id="weather-sprite_svg__rainy-7" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="0.1,7"
        strokeLinecap="round"
        strokeWidth={3}
        d="m25.902 46.117-1.389 7.878"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-2"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="0.1,7"
        strokeLinecap="round"
        strokeWidth={3}
        d="m31.174 45.015-1.39 7.879"
      />
      <path
        className="weather-sprite_svg__am-weather-rain-1"
        fill="none"
        stroke="#91C0F8"
        strokeDasharray="0.1,7"
        strokeLinecap="round"
        strokeWidth={3}
        d="m35.924 46.868-1.39 7.879"
      />
    </symbol>
    <symbol id="weather-sprite_svg__snowy-1" viewBox="0 0 64 64">
      <g transform="matrix(1.2 0 0 1.2 20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
      <g className="weather-sprite_svg__am-weather-snow-1">
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
      <g className="weather-sprite_svg__am-weather-snow-2">
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
    </symbol>
    <symbol id="weather-sprite_svg__snowy-2" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
      <g className="weather-sprite_svg__am-weather-snow-1">
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M32 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -40.734 62.127)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -7.5 39.5)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 6.266 30.127)"
          d="M0-2.5v5"
        />
      </g>
    </symbol>
    <symbol id="weather-sprite_svg__snowy-3" viewBox="0 0 64 64">
      <g transform="translate(20 26)">
        <g className="weather-sprite_svg__am-weather-sun">
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
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <g className="weather-sprite_svg__am-weather-snow-1">
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M27 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -43.234 56.092)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -10 37)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 3.766 29.092)"
          d="M0-2.5v5"
        />
      </g>
      <g className="weather-sprite_svg__am-weather-snow-2">
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M36 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -38.734 66.956)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -5.5 41.5)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 8.266 30.956)"
          d="M0-2.5v5"
        />
      </g>
    </symbol>
    <symbol id="weather-sprite_svg__snowy-4" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <g className="weather-sprite_svg__am-weather-snow-1">
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
    </symbol>
    <symbol id="weather-sprite_svg__snowy-5" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__snowy-6-2"
      />
      <g className="weather-sprite_svg__am-weather-snow-1">
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M27 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -43.234 56.092)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -10 37)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 3.766 29.092)"
          d="M0-2.5v5"
        />
      </g>
      <g className="weather-sprite_svg__am-weather-snow-2">
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M36 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -38.734 66.956)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -5.5 41.5)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 8.266 30.956)"
          d="M0-2.5v5"
        />
      </g>
    </symbol>
    <symbol id="weather-sprite_svg__snowy-6" viewBox="0 0 64 64">
      <path
        d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
        fill="#57A0EE"
        stroke="#FFF"
        strokeLinejoin="round"
        strokeWidth={1.2}
        className="weather-sprite_svg__am-weather-cloud-2"
      />
      <g className="weather-sprite_svg__am-weather-snow-1">
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          strokeWidth={1.2}
          d="M23 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -45.234 51.263)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -12 35)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 1.766 28.263)"
          d="M0-2.5v5"
        />
      </g>
      <g className="weather-sprite_svg__am-weather-snow-2">
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
      <g
        style={{
          WebkitAnimationName: "am-weather-snow-reverse",
          MozAnimationName: "am-weather-snow-reverse",
          msAnimationName: "am-weather-snow-reverse",
          animationName: "am-weather-snow-reverse",
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
          d="M40 44.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(45 -36.734 71.784)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(90 -3.5 43.5)"
          d="M0-2.5v5"
        />
        <path
          fill="none"
          stroke="#57A0EE"
          strokeLinecap="round"
          transform="rotate(135 10.266 31.784)"
          d="M0-2.5v5"
        />
      </g>
    </symbol>
  </svg>
);

export default SvgWeatherSprite;