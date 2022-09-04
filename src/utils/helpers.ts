/**
 * This function takes a list of 40 forecasts (8 per day for 5 days) and
 * returns a list of 5 forecasts (1 per day for 5 days).
 * @param forecasts - List containing 8 forecasts per day with 3-hour step.
 * @returns List containing one forecast per day
 */
export const filterforecasts = (forecasts: any[]): any[] => {
  const result: any[] = [];

  forecasts.forEach((forecast, index: number) => {
    /**
     * Pick the 1st forecast for the current day. For other days,
     * pick the forecast value at noon.
     */
    if (index === 0 || forecast['dt_txt'].indexOf('12:00:00') >= 0) {
      result.push(forecast);
    }
  });

  return result.slice(0, 5);
};

/**
 * This function takes the decimal value of temperature and
 * rounds it to the nearest integer.
 * @param value Temperature value in decimal form.
 * @returns Temperature value rounded to the nearest integer.
 */
export const getTemperature = (value: number): number => {
  if (!value) {
    return 0;
  }

  return Math.round(value);
};

/**
 * This function takes the time value in GMT Unix timestamp
 * and returns the name of the corresponding day.
 * @param time Time in GMT Unix timestamp
 * @returns Day corresponding to the given timestamp
 */
export const getNameForDay = (time: number): string => {
  /**
   * Multiply unix timestamp by 1000 to
   * convert it to milliseconds
   */
  const date = new Date(time * 1000);
  return getDayMap().get(date.getDay()) || '';
};

/**
 * This function takes the full name of the day and
 * converts it to the short name.
 * @param day Full name of the day.
 * @returns Short name containing the first three letters in day name.
 */
export const getShortNameForDay = (day: string): string => {
  if (!day) return '';
  return day.substring(0, 3);
};

/**
 * This function returns a Map object that maps
 * the day numbers to the corresponding day names.
 * @returns A map of day number and day name.
 */
export const getDayMap = (): Map<number, string> => {
  const map: Map<number, string> = new Map<number, string>();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  /**
   * Create a map with array index as keys.
   */
  days.forEach((day, index) => map.set(index, day));
  return map;
};
