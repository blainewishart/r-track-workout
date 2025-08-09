import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useWorkout } from '../context/WorkoutContext';

export default function Log() {
  const { state } = useWorkout();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const calculateSetDuration = (startTime: Date, endTime?: Date) => {
    if (!endTime) return 'In progress';
    const duration = endTime.getTime() - startTime.getTime();
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')} minutes`;
  };

  const formatSet = (set: any, index: number) => {
    const startTime = formatTime(set.startTime);
    const duration = calculateSetDuration(set.startTime, set.endTime);
    const reps = set.reps.join(', ');
    
    return `${index + 1}. ${set.moveName} ${set.weight} lbs start ${startTime}\n` +
           `   Reps: ${reps}\n` +
           `   Time for set: ${duration}\n`;
  };

  const renderCurrentSet = () => {
    if (!state.currentMove) return null;
    
    const startTime = state.currentWorkout ? formatTime(state.currentWorkout.startTime) : '';
    let currentSetText = `Current: ${state.currentMove}`;
    
    if (state.currentWeight > 0) {
      currentSetText += ` ${state.currentWeight} lbs`;
    }
    
    if (state.currentReps.length > 0) {
      currentSetText += `\n   Reps: ${state.currentReps.join(', ')}`;
    }
    
    return (
      <View style={styles.currentSetContainer}>
        <Text style={styles.currentSetText}>{currentSetText}</Text>
      </View>
    );
  };

  const renderWorkoutLog = () => {
    if (!state.currentWorkout) {
      return (
        <Text style={styles.emptyText}>
          No workout started. Select a move to begin.
        </Text>
      );
    }

    if (state.currentWorkout.sets.length === 0) {
      return (
        <View>
          <Text style={styles.workoutHeader}>
            Workout start time: {formatTime(state.currentWorkout.startTime)}
          </Text>
          <Text style={styles.setsHeader}>Sets:</Text>
          {renderCurrentSet()}
        </View>
      );
    }

    return (
      <View>
        <Text style={styles.workoutHeader}>
          Workout start time: {formatTime(state.currentWorkout.startTime)}
        </Text>
        <Text style={styles.setsHeader}>Sets:</Text>
        {state.currentWorkout.sets.map((set, index) => (
          <View key={set.id || index} style={styles.logEntry}>
            <Text style={styles.logText}>{formatSet(set, index)}</Text>
          </View>
        ))}
        {renderCurrentSet()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderWorkoutLog()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 16,
  },
  workoutHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  setsHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ccc',
    marginBottom: 8,
  },
  logEntry: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  logText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
  currentSetContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    backgroundColor: '#2a2a2a',
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
  },
  currentSetText: {
    fontSize: 14,
    color: '#007AFF',
    lineHeight: 20,
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingVertical: 20,
  },
});
