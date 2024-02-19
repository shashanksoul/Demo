import React, {useEffect} from 'react';
import RootNavigation from './navigation';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';
import {authReducer, movieReducer} from './data/redux';
import './localization';
import {updateSavedLng} from './utils/language';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  movieReducer,
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);
const App = () => {
  useEffect(() => {
    (async () => await updateSavedLng())();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
