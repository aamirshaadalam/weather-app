import { Component } from 'react';
import { getTemperature } from '../utils/helpers';

interface IProps {
  forecast: any;
}

class Today extends Component<IProps> {
  render() {
    const { forecast } = this.props;
    const temp = forecast.main.temp;
    const { id: icon, description } = forecast.weather[0];

    return (
      <div className='today'>
        <div className='day'>Today</div>
        <div className='details'>
          <div className='icon'>
            <i className={`wi wi-owm-${icon}`}></i>
          </div>
          <div className='weather'>
            <div className='temperature'>
              {getTemperature(temp)}
              <sup>o</sup>
            </div>
            <div className='description'>{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Today;
