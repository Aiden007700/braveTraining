import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import JsIsCool from "./JsIsCool";

ReactDOM.render(<Hello greeting={'Hello React Ninja'} />, document.getElementById('root'));
// ReactDOM.render(<JsIsCool/>, document.getElementById('root'))
;registerServiceWorker();
