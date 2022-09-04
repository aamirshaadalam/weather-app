import { combineReducers, configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities-slice';
import forecastReducer from './forecast-slice';
// import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  cities: citiesReducer,
  forecast: forecastReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
