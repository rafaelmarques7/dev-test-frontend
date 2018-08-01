/**
 * configStore.js
 * This file sets the Redux store and exports it.
 * It applies middleware - logger and thunk.
 * It loads the root reducer.
 * It sets the necessary configuration to have a persisten store.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './manager/reducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

/**
 * Configures a logger for the app
 */
const loggerMiddleware = createLogger()

/**
 * Set configurations for permanent state storage
 */
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


/**
 * Initialise the redux store 
 * and applies the permanent state configurations
 */
function configureStore(){
  const store = createStore(
    persistedReducer, 
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  const persistor = persistStore(store)
  return { store, persistor };
}

export default configureStore;