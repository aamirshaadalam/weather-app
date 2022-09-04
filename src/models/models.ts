export interface ICitiesSlice {
  list: ICity[];
  selected: ICity;
}

export interface IForecastSlice {
  isLoading: boolean;
}

export interface ICity {
  name: string;
  latitude: number;
  longitude: number;
}
