import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICity, IForecastSlice } from '../models/models';
import { filterforecasts } from '../utils/helpers';

const initialState: IForecastSlice = {
  isLoading: false,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchForecast.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchForecast.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default forecastSlice.reducer;

const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', async (city: ICity, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}&lat=${city.latitude}&lon=${city.longitude}`);
    return filterforecasts(response.data.list);
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
