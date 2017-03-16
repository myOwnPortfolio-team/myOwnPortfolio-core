import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AOS from 'aos';

AOS.init();

import ModulesLoader from './classes/ModulesLoader.jsx';

injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(<ModulesLoader/>, racine);
