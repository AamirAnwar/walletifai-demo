import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
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
  // console.log("Recieved user in the login form" + JSON.stringify(state,null,2));
  return {user:state.user};
}

export default connect(mapStateToProps, {loginUser})(App)
