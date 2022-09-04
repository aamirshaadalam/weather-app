import { Component, ReactNode } from 'react';
import Forecast from './components/forecast';
import Cities from './components/cities';
// import SvgRainy7 from './icons/animated/Rainy7';

class App extends Component {
  render(): ReactNode {
    return (
      <div className='app'>
        {/* <SvgRainy7 /> */}
        <Cities />
        <Forecast />
      </div>
    );
  }
}

export default App;
