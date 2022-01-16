import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import { reducer } from './redux/reducer';
import { Navigator } from './navigation/Navigator.js';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
