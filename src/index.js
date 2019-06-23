import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
//import DaCounters from './dacounters';

// 'Apps' must start with uppercase or shit breaks!
import Calculator from './calculator';

ReactDOM.render(<Calculator />, document.getElementById('root'));

//ReactDOM.render(<DaCounters />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
