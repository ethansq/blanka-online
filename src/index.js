import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash';
import registerServiceWorker from './registerServiceWorker';

require('./scss/base.scss');

ReactDOM.render(
    <Splash />,
    document.getElementById('root')
);

registerServiceWorker();
