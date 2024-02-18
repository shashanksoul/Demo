import React from 'react';
import RootNavigation from './navigation';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';
import {movieReducer} from './data/redux';

const middleWares = [thunk];

const store = createStore(movieReducer, applyMiddleware(...middleWares));
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
