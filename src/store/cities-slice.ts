import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICitiesSlice, ICity } from '../models/models';

const cityList = [
  {
    name: 'ottawa',
    longitude: -75.6981,
    latitude: 45.4112,
  },
  {
    name: 'moscow',
    longitude: 37.6156,
    latitude: 55.7522,
  },
  {
    name: 'tokyo',
    longitude: 139.6917,
    latitude: 35.6895,
  },
];

const initialState: ICitiesSlice = {
  list: cityList,
  selected: cityList[0],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSelectedCity: (state: ICitiesSlice, action: PayloadAction<ICity>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedCity } = citiesSlice.actions;

export default citiesSlice.reducer;
