import { Component, ReactNode } from 'react';
import Forecast from './components/forecast';
import Cities from './components/cities';

class App extends Component {
  render(): ReactNode {
    return (
      <div className='app'>
        <Cities />
        <Forecast />
      </div>
    );
  }
}

export default App;
