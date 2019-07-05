import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { Provider } from 'react-redux';
import authReducer from './reducers/authReducer';
import { createStore } from 'redux';

const store = createStore(authReducer);

const jsx = (
  <Provider store = {store} >
    <AppRouter />
  </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }
});

ReactDOM.render(jsx, document.getElementById('app'));
