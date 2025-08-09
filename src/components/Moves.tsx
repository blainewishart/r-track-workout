import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useWorkout } from '../context/WorkoutContext';

const exercises = [
  'Bench Press',
  'Pull Up',
  'Squat',
  'Deadlift',
  'Overhead Press',
  'Row',
  'Lunge',
  'Plank',
  'KB Swing',
  'Clean',
  'Snatch',
  'Burpee',
];

export default function Moves() {
  const { state, dispatch } = useWorkout();

  const handleMoveSelect = (move: string) => {
    // If selecting a different move, reset weight and reps
    if (state.currentMove !== move) {
      dispatch({ type: 'SET_WEIGHT', payload: 0 });
      dispatch({ type: 'CLEAR_REPS' });
    }
    
    dispatch({ type: 'SELECT_MOVE', payload: move });
    
    // Start workout when move is selected
    if (!state.isWorkoutActive) {
      dispatch({ type: 'START_WORKOUT' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moves</Text>
      <View style={styles.grid}>
        {exercises.map((exercise) => (
          <TouchableOpacity
            key={exercise}
            style={[
              styles.button,
              state.currentMove === exercise && styles.selectedButton,
            ]}
            onPress={() => handleMoveSelect(exercise)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.buttonText,
              state.currentMove === exercise && styles.selectedButtonText,
            ]}>
              {exercise}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 8,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    minHeight: 44,
    minWidth: 80,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  selectedButtonText: {
    color: '#fff',
  },
});
