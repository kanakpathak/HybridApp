import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

import { Card } from 'react-native-elements';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: ''
    });
  }
  
  render() {
    return (
      <View>
        <Header headerText = {'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}
