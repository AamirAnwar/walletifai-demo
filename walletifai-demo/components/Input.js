import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, isSecure, onChangeText}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        autoCapitalize='none'
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight : 23,
    
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    borderBottomWidth: 1,
    // backgroundColor: 'red',
    height:44,
    marginTop:5,
  },

  labelStyle: {

    fontSize: 14,
    color: 'gray',
    // backgroundColor: 'blue'
  },
  containerStyle: {
    // backgroundColor: 'green',
    // height: 64,
    flexDirection: 'column',
  }
}

export default Input;