import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './configStore';
import registerServiceWorker from './manager/registerServiceWorker';
import './styles/index.css'
import { PersistGate } from 'redux-persist/integration/react';

// Create the Redux store
const { store, persistor } = configureStore();

// Load root node, to be mounted
const ROOT_NODE = document.getElementById('root');

// Render to DOM
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  ROOT_NODE
);

// Enhanced caching options for production environment
registerServiceWorker();
