import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { WorkoutState, Workout, Set } from '../types/WorkoutTypes';

type WorkoutAction =
  | { type: 'START_WORKOUT' }
  | { type: 'END_WORKOUT' }
  | { type: 'SELECT_MOVE'; payload: string }
  | { type: 'SET_WEIGHT'; payload: number }
  | { type: 'ADD_REP'; payload: number }
  | { type: 'CLEAR_REPS' }
  | { type: 'ADD_SET'; payload: Set }
  | { type: 'LOAD_WORKOUT'; payload: Workout };

interface WorkoutContextType {
  state: WorkoutState;
  dispatch: React.Dispatch<WorkoutAction>;
}

const initialState: WorkoutState = {
  currentWorkout: null,
  isWorkoutActive: false,
  currentMove: null,
  currentWeight: 0,
  currentReps: [],
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

function workoutReducer(state: WorkoutState, action: WorkoutAction): WorkoutState {
  switch (action.type) {
    case 'START_WORKOUT':
      return {
        ...state,
        isWorkoutActive: true,
        currentWorkout: {
          id: Date.now().toString(),
          startTime: new Date(),
          sets: [],
        },
      };
    
    case 'END_WORKOUT':
      return {
        ...state,
        isWorkoutActive: false,
        currentWorkout: state.currentWorkout ? {
          ...state.currentWorkout,
          endTime: new Date(),
        } : null,
      };
    
    case 'SELECT_MOVE':
      return {
        ...state,
        currentMove: action.payload,
      };
    
    case 'SET_WEIGHT':
      return {
        ...state,
        currentWeight: action.payload,
      };
    
    case 'ADD_REP':
      return {
        ...state,
        currentReps: [...state.currentReps, action.payload],
      };
    
    case 'CLEAR_REPS':
      return {
        ...state,
        currentReps: [],
      };
    
    case 'ADD_SET':
      if (!state.currentWorkout) return state;
      return {
        ...state,
        currentWorkout: {
          ...state.currentWorkout,
          sets: [...state.currentWorkout.sets, action.payload],
        },
        currentReps: [],
      };
    
    case 'LOAD_WORKOUT':
      return {
        ...state,
        currentWorkout: action.payload,
        isWorkoutActive: !!action.payload.endTime,
      };
    
    default:
      return state;
  }
}

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(workoutReducer, initialState);

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
}
