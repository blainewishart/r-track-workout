
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WorkoutState {
  moveName: string;
  moveWeight: number;
  moveReps: number[];
  setMoveName: (name: string) => void;
  setMoveWeight: (weight: number) => void;
  setMoveReps: (reps: number[]) => void;
}

const Header = ({ moveName, moveWeight }: WorkoutState) => (
  <Text style={styles.header}>
    {moveName ? `Current: ${moveName} ${moveWeight}kg` : 'Ready to start'}
  </Text>
);
const Moves = ({ moveName, setMoveName }: WorkoutState) => {
  const moves = ['Squat', 'Bench Press', 'Deadlift'];
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Moves</Text>
      <Text>Selected: {moveName || 'None'}</Text>
      <View style={styles.buttonRow}>
        {moves.map(move => (
          <TouchableOpacity
            key={move}
            style={[styles.button, moveName === move && styles.selectedButton]}
            onPress={() => setMoveName(move)}
          >
            <Text style={styles.buttonText}>{move}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const Keypad = ({ moveWeight, moveReps, setMoveWeight, setMoveReps }: WorkoutState) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Keypad</Text>
    <Text>Weight: {moveWeight}kg</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} onPress={() => setMoveWeight(Math.max(0, moveWeight - 5))}>
        <Text style={styles.buttonText}>-5kg</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setMoveWeight(moveWeight + 5)}>
        <Text style={styles.buttonText}>+5kg</Text>
      </TouchableOpacity>
    </View>
    <Text>Reps: {moveReps.join(', ') || 'None'}</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button} onPress={() => setMoveReps([...moveReps, 8])}>
        <Text style={styles.buttonText}>Add 8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setMoveReps([])}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const Log = ({ moveName, moveWeight, moveReps }: WorkoutState) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Log</Text>
    {moveName && moveReps.length > 0 ? (
      <Text>Last: {moveName} {moveWeight}kg x [{moveReps.join(',')}]</Text>
    ) : (
      <Text>No entries yet</Text>
    )}
  </View>
);

export default function App() {
  // Minimal global state
  const [moveName, setMoveName] = useState('');
  const [moveWeight, setMoveWeight] = useState(0);
  const [moveReps, setMoveReps] = useState<number[]>([]);

  const stateProps = {
    moveName,
    moveWeight,
    moveReps,
    setMoveName,
    setMoveWeight,
    setMoveReps
  };

  return (
    <View style={styles.container}>
      <Header {...stateProps} />
      <Moves {...stateProps} />
      <Keypad {...stateProps} />
      <Log {...stateProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    minWidth: 60,
  },
  selectedButton: {
    backgroundColor: '#FF9500',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});
