import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { ICity } from '../models/models';
import { AppDispatch, RootState } from '../store/index';
import { setSelectedCity } from '../store/cities-slice';

interface IProps {
  cities: ICity[];
  selectedCity: ICity;
  dispatch: AppDispatch;
}

class Cities extends Component<IProps> {
  renderCities(): ReactNode[] {
    const { cities, selectedCity, dispatch } = this.props;

    return cities.map((city: ICity): ReactNode => {
      if (selectedCity.name === city.name) {
        return (
          <span className='city active' key={city.name}>
            {city.name}
          </span>
        );
      }

      return (
        <span className='city' key={city.name} onClick={() => dispatch(setSelectedCity(city))}>
          {city.name}
        </span>
      );
    });
  }

  render() {
    return <div className='cities'>{this.renderCities()}</div>;
  }
}

const mapStateToProps = (state: RootState) => ({
  cities: state.cities.list,
  selectedCity: state.cities.selected,
});

export default connect(mapStateToProps)(Cities);
