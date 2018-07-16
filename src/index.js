import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import gameChangeReducer from './reducers/game-change-reducer';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(gameChangeReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  document.getElementById('root'));
registerServiceWorker();
