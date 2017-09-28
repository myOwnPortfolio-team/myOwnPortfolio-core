/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AOS from 'aos';

import ModulesLoader from './classes/ModulesLoader.jsx';

AOS.init();
injectTapEventPlugin();

const racine = document.getElementById('app');

ReactDOM.render(<ModulesLoader />, racine);
