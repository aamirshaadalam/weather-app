import { Component } from 'react';
import Card from './card';

interface IProps {
  forecasts: any[];
}

class Upcoming extends Component<IProps> {
  render() {
    const { forecasts } = this.props;

    return (
      <div className='upcoming'>
        {forecasts.map((forecast, index) => (
          <Card key={index} forecast={forecast} />
        ))}
      </div>
    );
  }
}

export default Upcoming;
