import React from 'react';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {store} from './src/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
