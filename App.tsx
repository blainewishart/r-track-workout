import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WorkoutProvider } from './src/context/WorkoutContext';
import WorkoutScreen from './src/screens/WorkoutScreen';

export default function App() {
  return (
    <WorkoutProvider>
      <SafeAreaView style={styles.container}>
        <WorkoutScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </WorkoutProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
