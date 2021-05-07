import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function WButton(props) {
  const { onPress, title = 'Login' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // width: 250,
    alignItems: 'center',
    paddingVertical: 15,
    // paddingHorizontal: 0,
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
