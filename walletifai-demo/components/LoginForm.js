import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';

import Input from './Input';
import {connect} from 'react-redux';
import {loginUser} from '../actions';
import WButton from './WButton';
import axios from 'axios';

class App extends React.Component {
  state = {username:'aamir@walletifai.com',password:'aamiranwar123'}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.bannerImage} source={require('../resources/login_image.png')} />
        </View>
        <Text style={styles.title}>Log in</Text>
        <Input label="Email" isSecure={false} value={this.state.username} onChangeText={text => {this.setState({'username':text})}} />
        <Input label="Password" isSecure={true} value={this.state.password} onChangeText={text => {this.setState({'password':text})}} />
        <WButton customStyle={styles.button} onPress= {this.onLoginButtonClick.bind(this)} />

      </View>
    );
  }
  onLoginButtonClick() {
    const {username, password} = this.state;
    if (validateInput(username, password) == false) {
      showAlert('Invalid credentials', 'One or more of the input fields has an invalid value')
      return;
    }
    this.props.loginUser(this.state.username, this.state.password);
  }

}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center'  
  },

  bannerImage: {
    marginTop:30,
    width: 250,
    height: 250,
  },

  title: {
    textAlign:'center', 
    fontSize:20,
    fontWeight:'bold',
    marginTop: 20,
  },

  button: {
    marginTop: 10
  },

  container: {
    marginTop:50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    alignContent: 'center',
  }
});


function mapStateToProps(state) {
  console.log("Recieved user in the login form" + JSON.stringify(state,null,2));
  if (state.user) {
    showAlert("Success", "Logged in successfully with username " + state.user.username);
  }
  
  return {user:state.user};
}

 const showAlert = (title, subtitle) => Alert.alert(
    title,
    subtitle,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

function validateInput(username, password) {
  if (!username || username == '') {
    return false;
  } 
  if (!password || password == '') {
    return false;
  } 

  return true;
}

export default connect(mapStateToProps, {loginUser})(App)
