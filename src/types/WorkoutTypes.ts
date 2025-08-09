export interface Workout {
  id: string;
  startTime: Date;
  endTime?: Date;
  notes?: string;
  sets: Set[];
}

export interface Set {
  id: string;
  moveName: string;
  weight: number;
  reps: number[];
  startTime: Date;
  endTime?: Date;
  notes?: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
}

export interface WorkoutState {
  currentWorkout: Workout | null;
  isWorkoutActive: boolean;
  currentMove: string | null;
  currentWeight: number;
  currentReps: number[];
}
