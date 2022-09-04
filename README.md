# Sample Weather App - React
This application displays the real-time weather for Ottawa, Moscow and Tokyo using *openweathermap* API.

The API returns multiple forecasts for a 5-day period with 3-hour step. For the sake of simplicity, the app uses the following logic to show the weather data.
- For the current day, show the forecast that is closest to the current time.
- For future days, show the forecast for 12:00PM for the corresponding day.

## How to setup development environment?
- Clone this repository.
- Navigate to root folder.
- Create a `.env` file and add your API key for accessing weather API. The entry should be as follows:
- `REACT_APP_API_KEY = <your API key>`
- Install dependencies by executing `npm install` command.
- Execute `npm start` to start the app.

## Working Demo
You can access the working demo of the app [here](https://weather-app-aamirshaadalam.vercel.app/)