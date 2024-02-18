import React, {useEffect} from 'react';
import RootNavigation from './navigation';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';
import {movieReducer} from './data/redux';
import './localization';
import {updateSavedLng} from './utils/language';

const middleWares = [thunk];

const store = createStore(movieReducer, applyMiddleware(...middleWares));
const App = () => {
  useEffect(() => {
    (async () => await updateSavedLng())();
  }, []);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
