import React from 'react';
import Heater from '../components/Header';
import Carousel from '../components/Carousel';
import Main from '../components/Main';
import Politics from '../components/Politics.jsx';
// import Example from '../components/Example';

import '../assets/App.scss';

const App = () => (
    <div className="App">
        <Heater />
        <Carousel />
        <Main />
        <Politics />
        {/* <Example /> */}
    </div>
);

export default App;