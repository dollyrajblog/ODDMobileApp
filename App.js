import React from 'react';
import Routes from './src/Route/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/Store/store';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
