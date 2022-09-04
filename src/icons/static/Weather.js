import * as React from "react";

const SvgWeather = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
    <path
      d="M38.62 25.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 0 0-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 0 0-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
      fill="#91C0F8"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={0.72}
      className="weather_svg__am-weather-cloud-1"
    />
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <path
      className="weather_svg__am-weather-stroke"
      fill="orange"
      stroke="#fff"
      d="M28.16 34.52h7.44l-4.92 8.64h4.68L24.8 55.52l4.08-9.24h-4.56z"
      strokeWidth={1.2}
    />
    <g transform="translate(32 32)">
      <g className="weather_svg__am-weather-sun weather_svg__am-weather-sun-shiny weather_svg__am-weather-easing-ease-in-out">
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
      fill="orange"
      d="m23.3 21.5.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2-1.2-.7 1.2-.6z"
      className="weather_svg__am-weather-moon-star-1"
    />
    <path
      fill="orange"
      d="m43.3 31.5.7 1.2 1.2.6-1.2.7-.7 1.2-.6-1.2-1.2-.7 1.2-.6z"
      className="weather_svg__am-weather-moon-star-2"
    />
    <path
      d="M34.5 33.2c0-3.7 2-6.9 5-8.7-1.5-.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-.5 5-1.3-3-1.7-5-5-5-8.7z"
      fill="orange"
      stroke="orange"
      strokeLinejoin="round"
      strokeWidth={2}
      className="weather_svg__am-weather-moon"
    />
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
      className="weather_svg__am-weather-cloud-2"
    />
    <path
      fill="orange"
      d="m38.64 15.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
      className="weather_svg__am-weather-moon-star-1"
    />
    <path
      fill="orange"
      d="m54.64 23.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
      className="weather_svg__am-weather-moon-star-2"
    />
    <path
      d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
      fill="orange"
      stroke="orange"
      strokeLinejoin="round"
      strokeWidth={1.6}
      className="weather_svg__am-weather-moon"
    />
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#C6DEFF"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.2}
      className="weather_svg__am-weather-cloud-2"
    />
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
      className="weather_svg__am-weather-cloud-2"
    />
    <path
      fill="orange"
      d="m38.64 15.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
      className="weather_svg__am-weather-moon-star-1"
    />
    <path
      fill="orange"
      d="m54.64 23.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
      className="weather_svg__am-weather-moon-star-2"
    />
    <path
      d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
      fill="orange"
      stroke="orange"
      strokeLinejoin="round"
      strokeWidth={1.6}
      className="weather_svg__am-weather-moon"
    />
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#91C0F8"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.2}
      className="weather_svg__am-weather-cloud-2"
    />
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
      className="weather_svg__am-weather-cloud-2"
    />
    <path
      fill="orange"
      d="m38.64 15.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
      className="weather_svg__am-weather-moon-star-1"
    />
    <path
      fill="orange"
      d="m54.64 23.2.56.96.96.48-.96.56-.56.96-.48-.96-.96-.56.96-.48z"
      className="weather_svg__am-weather-moon-star-2"
    />
    <path
      d="M47.6 24.56c0-2.96 1.6-5.52 4-6.96-1.2-.72-2.56-1.04-4-1.04-4.4 0-8 3.6-8 8s3.6 8 8 8c1.44 0 2.8-.4 4-1.04-2.4-1.36-4-4-4-6.96z"
      fill="orange"
      stroke="orange"
      strokeLinejoin="round"
      strokeWidth={1.6}
      className="weather_svg__am-weather-moon"
    />
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
      className="weather_svg__am-weather-cloud-2"
    />
    <path
      d="M38.62 23.24c0-2.76-2.22-4.92-4.92-4.92-.6 0-1.14.12-1.68.3-.18-2.04-1.86-3.72-3.96-3.72a4.02 4.02 0 0 0-4.02 4.02c0 .48.12.96.24 1.38-.18-.06-.42-.06-.6-.06a4.02 4.02 0 0 0-4.02 4.02c0 2.16 1.74 3.96 3.9 4.02h10.32c2.64-.3 4.74-2.4 4.74-5.04z"
      fill="#91C0F8"
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={0.72}
      className="weather_svg__am-weather-cloud-1"
    />
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
      className="weather_svg__am-weather-cloud-2"
    />
    <g transform="matrix(1.2 0 0 1.2 20 26)">
      <g className="weather_svg__am-weather-sun">
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
        className="weather_svg__am-weather-rain-1"
        d="m27.918 45.943-1.39 7.878"
      />
      <path
        className="weather_svg__am-weather-rain-2"
        d="m34.174 45.015-1.39 7.879"
      />
    </g>
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
      className="weather_svg__am-weather-rain-1"
      fill="none"
      stroke="#91C0F8"
      strokeDasharray="4,7"
      strokeLinecap="round"
      strokeWidth={2}
      d="m30.918 44.943-1.39 7.878"
    />
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
    <g
      fill="none"
      stroke="#91C0F8"
      strokeDasharray="4,7"
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path
        className="weather_svg__am-weather-rain-1"
        d="m27.918 45.943-1.39 7.878"
      />
      <path
        className="weather_svg__am-weather-rain-2"
        d="m34.174 45.015-1.39 7.879"
      />
    </g>
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <path
      className="weather_svg__am-weather-rain-1"
      fill="none"
      stroke="#91C0F8"
      strokeDasharray="4,7"
      strokeLinecap="round"
      strokeWidth={2}
      d="m30.918 44.943-1.39 7.878"
    />
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
      strokeDasharray="4,7"
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path
        className="weather_svg__am-weather-rain-1"
        d="m27.918 45.943-1.39 7.878"
      />
      <path
        className="weather_svg__am-weather-rain-2"
        d="m34.174 45.015-1.39 7.879"
      />
    </g>
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
        className="weather_svg__am-weather-rain-1"
        d="m26.887 46.29-1.39 7.879"
      />
      <path
        className="weather_svg__am-weather-rain-2"
        d="m31.174 45.015-1.39 7.879"
      />
      <path
        className="weather_svg__am-weather-rain-1"
        d="m34.94 46.695-1.39 7.878"
      />
    </g>
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
      strokeDasharray="0.1,7"
      strokeLinecap="round"
      strokeWidth={3}
    >
      <path
        className="weather_svg__am-weather-rain-1"
        d="m25.902 46.117-1.389 7.878"
      />
      <path
        className="weather_svg__am-weather-rain-2"
        d="m31.174 45.015-1.39 7.879"
      />
      <path
        className="weather_svg__am-weather-rain-1"
        d="m35.924 46.868-1.39 7.879"
      />
    </g>
    <g transform="matrix(1.2 0 0 1.2 20 26)">
      <g className="weather_svg__am-weather-sun">
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
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-1"
    >
      <path strokeWidth={1.2} d="M27 43.5v5" />
      <path d="m28.768 44.232-3.536 3.536M29.5 46h-5M28.768 47.768l-3.536-3.536" />
    </g>
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-2"
    >
      <path strokeWidth={1.2} d="M36 43.5v5" />
      <path d="m37.768 44.232-3.536 3.536M38.5 46h-5M37.768 47.768l-3.536-3.536" />
    </g>
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
      className="weather_svg__am-weather-cloud-2"
    />
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-1"
    >
      <path strokeWidth={1.2} d="M32 44.5v5" />
      <path d="m33.768 45.232-3.536 3.536M34.5 47h-5M33.768 48.768l-3.536-3.536" />
    </g>
    <g transform="translate(20 26)">
      <g className="weather_svg__am-weather-sun">
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
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-1"
    >
      <path strokeWidth={1.2} d="M27 44.5v5" />
      <path d="m28.768 45.232-3.536 3.536M29.5 47h-5M28.768 48.768l-3.536-3.536" />
    </g>
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-2"
    >
      <path strokeWidth={1.2} d="M36 44.5v5" />
      <path d="m37.768 45.232-3.536 3.536M38.5 47h-5M37.768 48.768l-3.536-3.536" />
    </g>
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
    />
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-1"
    >
      <path strokeWidth={1.2} d="M31 44.5v5" />
      <path d="m32.768 45.232-3.536 3.536M33.5 47h-5M32.768 48.768l-3.536-3.536" />
    </g>
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
      className="weather_svg__snowy-6-2"
    />
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-1"
    >
      <path strokeWidth={1.2} d="M27 44.5v5" />
      <path d="m28.768 45.232-3.536 3.536M29.5 47h-5M28.768 48.768l-3.536-3.536" />
    </g>
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-2"
    >
      <path strokeWidth={1.2} d="M36 44.5v5" />
      <path d="m37.768 45.232-3.536 3.536M38.5 47h-5M37.768 48.768l-3.536-3.536" />
    </g>
    <path
      d="M47.7 34.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9.2-2.8.5-.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 .8.2 1.6.4 2.3-.3-.1-.7-.1-1-.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-.5 7.9-4 7.9-8.4z"
      fill="#57A0EE"
      stroke="#FFF"
      strokeLinejoin="round"
      strokeWidth={1.2}
      className="weather_svg__am-weather-cloud-2"
    />
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-1"
    >
      <path strokeWidth={1.2} d="M23 44.5v5" />
      <path d="m24.768 45.232-3.536 3.536M25.5 47h-5M24.768 48.768l-3.536-3.536" />
    </g>
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-2"
    >
      <path strokeWidth={1.2} d="M31 44.5v5" />
      <path d="m32.768 45.232-3.536 3.536M33.5 47h-5M32.768 48.768l-3.536-3.536" />
    </g>
    <g
      fill="none"
      stroke="#57A0EE"
      strokeLinecap="round"
      className="weather_svg__am-weather-snow-3"
    >
      <path strokeWidth={1.2} d="M40 44.5v5" />
      <path d="m41.768 45.232-3.536 3.536M42.5 47h-5M41.768 48.768l-3.536-3.536" />
    </g>
  </svg>
);

export default SvgWeather;
