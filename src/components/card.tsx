import { Component } from 'react';
import { getNameForDay, getShortNameForDay, getTemperature } from '../utils/helpers';

interface IProps {
  forecast: any;
}

class Card extends Component<IProps> {
  render() {
    const { forecast } = this.props;
    const icon = forecast.weather[0].id;
    const temp = forecast.main.temp;

    return (
      <div className='card'>
        <div className='day'>{getShortNameForDay(getNameForDay(forecast.dt))}</div>
        <div className='icon'>
          <i className={`wi wi-owm-${icon}`}></i>
        </div>
        <div className='temperature'>
          {getTemperature(temp)}
          <sup>o</sup>
        </div>
      </div>
    );
  }
}

export default Card;
