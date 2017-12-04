import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash';
import ChooseName from './choose-name';
import registerServiceWorker from './registerServiceWorker';

require('./scss/base.scss');

ReactDOM.render(
    // <Splash />,
    <ChooseName />,
    document.getElementById('root')
);

registerServiceWorker();
