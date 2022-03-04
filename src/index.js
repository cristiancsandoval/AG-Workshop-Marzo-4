import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppBici from './containers/AppBici';
import './style/index.css'

ReactDOM.render(
  <Provider >
    <AppBici/>
  </Provider>,
  document.getElementById('root')
);
