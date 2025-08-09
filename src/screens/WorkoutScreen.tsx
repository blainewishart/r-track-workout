import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Moves from '../components/Moves';
import Keypad from '../components/Keypad';
import Log from '../components/Log';

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Moves />
      <Keypad />
      <Log />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
});
