import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/';
import thunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))} >
        <LoginForm />
      </Provider>
    );
  }
}