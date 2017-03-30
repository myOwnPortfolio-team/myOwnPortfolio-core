import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AOS from 'aos';

import ModulesLoader from './classes/ModulesLoader.jsx';
var app_properties = require('./config/app_properties.json');

AOS.init();
injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(<ModulesLoader/>, racine);
