import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function WButton(props) {
  const {customStyle, onPress, title = 'Login' } = props;
  return (
    <Pressable style={[styles.button, customStyle]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
