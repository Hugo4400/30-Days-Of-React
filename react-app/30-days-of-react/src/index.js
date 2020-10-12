import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frontendimg from './frontendImg';
import HexaColor from "./Hexacolor";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
        <div>
            <Frontendimg name="css"/>
            <Frontendimg name="html"/>
            <Frontendimg name="js"/>
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
