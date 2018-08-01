/**
 * index.js 
 * This file renders the main component to the DOM.
 * It also initialises and configures the redux store. 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './configStore';
import { PersistGate } from 'redux-persist/integration/react';
import registerServiceWorker from './manager/registerServiceWorker';
import './styles/index.css'

/**
 * Creates the redux store
 * and the persistor, which is used to mantain the state
 * when a user refreshes the page or comes back online
 */
const { 
  store, 
  persistor
 } = configureStore();

/**
 * Loads the root node of the HTML file.
 */
const ROOT_NODE = document.getElementById('root');

/**
 * Render the main component - App - to the Root node
 */
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  ROOT_NODE
);

/**
 * Enhanced caching options for production environment
 */
registerServiceWorker();
