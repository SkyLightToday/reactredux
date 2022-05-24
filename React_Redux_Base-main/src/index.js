import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
//import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from './redux/rootreducer';
import {Provider} from 'react-redux';
import {spamFiltre} from './redux/middlewarw';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, spamFiltre)
  //window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
