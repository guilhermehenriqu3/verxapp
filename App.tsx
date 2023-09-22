import React from 'react';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/Store';

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
