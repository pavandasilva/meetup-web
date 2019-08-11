import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import RouteWrapper from '~/routes';
import GlobalStyle from '~/styles/global';
import history from '~/services/history';

import '~/config/Reactotron';

import { store, persistor } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <RouteWrapper />
        </Router>
        <GlobalStyle />
      </PersistGate>
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}

export default App;
