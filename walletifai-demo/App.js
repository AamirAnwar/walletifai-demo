import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/';
import thunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
// import promise from 'redux-promise';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))} >
        <LoginForm />
      </Provider>
    );
  }
}