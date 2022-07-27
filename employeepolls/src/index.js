import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middlewares';

export const store = createStore(reducer, middleware)

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
