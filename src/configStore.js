import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './manager/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Adds a logger to the app
const loggerMiddleware = createLogger()


// Initialise the redux store
function configureStore(){
  const store = createStore(
    rootReducer, 
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return store;
}

export default configureStore;