import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Manager from './components/password-manger';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Manager/>,document.getElementById('root'));
serviceWorker.unregister();
