import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useWorkout } from '../context/WorkoutContext';

export default function Header() {
  const { state } = useWorkout();
  
  const getStatusMessage = () => {
    if (!state.currentMove) {
      return 'Select move to start workout';
    }
    return 'Workout in progress';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>R-Track-Workout</Text>
      <Text style={styles.status}>{getStatusMessage()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#ccc',
  },
});
