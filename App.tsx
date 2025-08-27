
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Header = () => <Text>I am the banner</Text>;
const Moves = () => <Text>I am the move list</Text>;
const Keypad = () => <Text>I am the keypad</Text>;
const Log = () => <Text>I am the log</Text>;

export default function App() {
  // Minimal global state
  const [moveName, setMoveName] = useState('');
  const [moveWeight, setMoveWeight] = useState(0);
  const [moveReps, setMoveReps] = useState<number[]>([]);

  return (
    <View style={{ flex: 1, padding: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Header />
      <Moves />
      <Keypad />
      <Log />
    </View>
  );
}
