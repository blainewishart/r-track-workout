import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useWorkout } from '../context/WorkoutContext';

export default function Keypad() {
  const { state, dispatch } = useWorkout();
  const [inputMode, setInputMode] = useState<'weight' | 'reps'>('weight');
  const [currentInput, setCurrentInput] = useState('');

  const handleNumberPress = (num: number) => {
    setCurrentInput(prev => prev + num.toString());
  };

  const handleClear = () => {
    setCurrentInput('');
  };

  const handleEnter = () => {
    const value = parseInt(currentInput);
    if (isNaN(value)) return;

    if (inputMode === 'weight') {
      dispatch({ type: 'SET_WEIGHT', payload: value });
      setInputMode('reps');
    } else {
      dispatch({ type: 'ADD_REP', payload: value });
      // Create and add the set when we have weight and at least one rep
      if (state.currentWeight > 0 && state.currentReps.length > 0) {
        const newSet = {
          id: Date.now().toString(),
          moveName: state.currentMove!,
          weight: state.currentWeight,
          reps: [...state.currentReps, value],
          startTime: new Date(),
        };
        dispatch({ type: 'ADD_SET', payload: newSet });
        // Reset for next set
        dispatch({ type: 'SET_WEIGHT', payload: 0 });
        dispatch({ type: 'CLEAR_REPS' });
        setInputMode('weight');
      }
    }
    
    setCurrentInput('');
  };

  const handleEndWorkout = () => {
    dispatch({ type: 'END_WORKOUT' });
  };

  const getDisplayMessage = () => {
    if (!state.currentMove) {
      return 'Select a move first';
    }
    if (inputMode === 'weight') {
      return `Enter weight for ${state.currentMove}`;
    }
    return 'Enter one or more reps';
  };

  const renderNumberButton = (num: number) => (
    <TouchableOpacity
      key={num}
      style={styles.numberButton}
      onPress={() => handleNumberPress(num)}
      activeOpacity={0.7}
    >
      <Text style={styles.numberButtonText}>{num}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keypad</Text>
      
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.moveInfo}>
          {state.currentMove && `${state.currentMove}`}
          {state.currentWeight > 0 && ` ${state.currentWeight} lbs`}
        </Text>
        <Text style={styles.message}>{getDisplayMessage()}</Text>
      </View>

      {/* Number Pad */}
      <View style={styles.numberPad}>
        <View style={styles.numberRow}>
          {renderNumberButton(1)}
          {renderNumberButton(2)}
          {renderNumberButton(3)}
        </View>
        <View style={styles.numberRow}>
          {renderNumberButton(4)}
          {renderNumberButton(5)}
          {renderNumberButton(6)}
        </View>
        <View style={styles.numberRow}>
          {renderNumberButton(7)}
          {renderNumberButton(8)}
          {renderNumberButton(9)}
        </View>
        <View style={styles.numberRow}>
          {renderNumberButton(0)}
          <TouchableOpacity style={styles.actionButton} onPress={handleClear}>
            <Text style={styles.actionButtonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleEnter}>
            <Text style={styles.actionButtonText}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.endWorkoutButton} onPress={handleEndWorkout}>
          <Text style={styles.endWorkoutButtonText}>End Workout</Text>
        </TouchableOpacity>
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
  display: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  moveInfo: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  message: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
    fontWeight: '600',
  },
  numberPad: {
    marginBottom: 16,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  numberButton: {
    width: '30%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  actionButton: {
    width: '30%',
    height: 50,
    backgroundColor: '#666',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  endWorkoutButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#555',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endWorkoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc',
  },
});
