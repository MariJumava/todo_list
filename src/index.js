import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import { Navigator }from "./navigation/Navigator.js";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer)}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
