# R-Track-Workout

A React Native mobile-first workout tracking application designed specifically for Android deployment. The app features large, gym-friendly buttons and minimal text input for users who are out of breath, sweating, and distracted during workouts.

## Features

- **Large Touch Targets**: 44px minimum for gym use
- **High Contrast Design**: Optimized for gym lighting conditions
- **One-Handed Operation**: Designed for easy use during workouts
- **Offline-First**: No internet connection required
- **Simple Interface**: Minimal text input for distracted users

## Core Components

1. **Header**: Product name and status message
2. **Moves**: Exercise selection buttons (Bench Press, Pull Up, Squat, etc.)
3. **Keypad**: Numeric input for weight and reps
4. **Log**: Real-time workout log display

## Tech Stack

- React Native with Expo
- TypeScript for type safety
- React Context for state management
- AsyncStorage for offline persistence

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd r-track-workout
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on Android:
```bash
npm run android
```

## Development

The app follows a component-based architecture with:

- **Pure React Native components** (no external UI libraries)
- **Custom styling** with StyleSheet API
- **Responsive design** using flexbox
- **Offline-first** architecture with AsyncStorage

## Project Structure

```
src/
├── components/     # Core UI components
│   ├── Header.tsx
│   ├── Moves.tsx
│   ├── Keypad.tsx
│   └── Log.tsx
├── context/        # React Context providers
├── services/       # Data persistence services
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── screens/        # Screen components
```

## Usage

1. **Start Workout**: Tap "Start Workout" to begin
2. **Select Exercise**: Choose from the available moves
3. **Enter Weight**: Use the keypad to input weight
4. **Enter Reps**: Add individual rep counts
5. **View Log**: See your workout progress in real-time
6. **End Workout**: Complete your session

## Contributing

This project follows the guidelines outlined in `.cursor/index.mdc` for consistent development practices.

## License

This project is licensed under the MIT License.
