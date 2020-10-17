import React from 'react';
import Heater from '../components/Header';
import Carousel from '../components/Carousel';
import Main from '../components/Main';
import Politics from '../components/Politics';

import '../assets/App.scss';

const App = () => (
    <div className="App">
        <Heater />
        <Carousel />
        <Main />
        <Politics />
    </div>
);

export default App;