import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './configStore';
import registerServiceWorker from './manager/registerServiceWorker';
import './styles/index.css'

// Create the Redux store
const store = configureStore();

// Load root node, to be mounted
const ROOT_NODE = document.getElementById('root');

// Render to DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  ROOT_NODE
);

// Enhanced caching options for production environment
registerServiceWorker();
