import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ICity } from '../models/models';
import { AppDispatch, RootState } from '../store';
import { fetchForecast } from '../store/forecast-slice';
import Loader from './loader';
import Today from './today';
import Upcoming from './upcoming';

interface IProps {
  selectedCity: ICity;
  isLoading: boolean;
  dispatch: AppDispatch;
}

interface IState {
  forecasts: any[];
}

class Forecast extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      forecasts: [],
    };
  }

  componentDidMount(): void {
    this.refreshForecastData();
  }

  componentDidUpdate(prevProps: Readonly<IProps>): void {
    if (this.props.selectedCity !== prevProps.selectedCity) {
      this.refreshForecastData();
    }
  }

  refreshForecastData() {
    const { dispatch, selectedCity } = this.props;

    dispatch(fetchForecast(selectedCity)).then(({ payload }): void => {
      this.setState({ forecasts: payload as any[] });
    });
  }

  getContent(): ReactNode {
    const { forecasts } = this.state;
    const { isLoading } = this.props;

    if (isLoading || !(forecasts && forecasts.length > 0)) {
      return <Loader />;
    }

    return (
      <>
        <Today forecast={forecasts[0]} />
        <Upcoming forecasts={forecasts.slice(1)} />
      </>
    );
  }

  render() {
    return <div className='forecast'>{this.getContent()}</div>;
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedCity: state.cities.selected,
  isLoading: state.forecast.isLoading,
});

export default connect(mapStateToProps)(Forecast);
