import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './manager/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Creates a logger to the app
const loggerMiddleware = createLogger()

// Set configurations for permanent state storage
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// Initialise the redux store and apply the permanent state configurations
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