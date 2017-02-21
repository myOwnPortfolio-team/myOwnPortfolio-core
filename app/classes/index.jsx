import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(<div>Hello World</div>, racine);
