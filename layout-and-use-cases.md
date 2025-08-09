# Track Workout 

A workout tracking application

1. **Practical Tool**: A gym companion for 
- tracking workouts in real-time
- providing statistics organized by time, day, week, month, year

# Track Workout 

## Project Goals

- Create a practical, user-friendly workout tracking tool for gym use. A user will often be out of breath, sweating, and distracted.
  - Accordingly, there should be no direct user input of data. All user input needs to be through large, well separated buttons.

## UI Layout 
- see ./supporting_docs/key_pad.pnt for sketch of the keypad
- see ./supporting_docs/workout_tracker_ui.pnt for sketch main app ui
- see ./UI_details.md for design notes
### components
The high level componets are Header, Moves, Keypad, and Log. They are described below
Header is at the top of the page contains text reading "Select move tl start workout". 
Moves and Keypad are Cards are orgainized horiztonally at the top of the page. 
   - On the left, Moves is a pallet of buttons, each labeled with a move such as "bench press", "pull up", "squat", "single arm snatch", "clean and jerk"
   - On the right, Keypad is a card containing a formated text above numeric kepad, which includes a Del key.  Below the keypad is a text area in which the numbers are entered one, by one. Close to it is a button: "Enter". A line separtethe keypad and numerica entry from two buttons: "Change Move" and "End Workout"
Log is a text area for displayiing loging information at the bottom of the page. It is append only.

## Use Cases
1. User reads message at top of page and selects a move.
    1. system responds by
       1. loging event to log with time 
       2. changing the messasge at top of page from "select move" to "workout in progress"
       3. The only enabled controls are in the 'move' component. Component 'keypad' is disabled until a move is selected.
 2. User selects a 'move'
    1. System responds by 
       1. Changing the text above the keypad to "Enter weight for move $move"
       2. highlighting, perhaps with a checkmark or bounding box, the selected move.
 3. User uses key pad to enter a weight and clicks "enter" when satisfied.
    1. system responds by
       1. loging move and weight to 'log' component
       2. Changing the text above the keypad to "Enter one or more reps"
 4. User uses 'keypad' to enter a list of one or more reps.
    1. System responds by 
       1. updating the log with each new rep
       2. clearing the input box
       3. after the first rep is enabled, the 'moves' component becomeseactive and the usercan switch to a new move or continue to add reps.
          1. If/when the user selects a new move, 
             1. The log entry for the last set, reflects the total time for the set
             2. The log reflects that a new set is started with its start time.
 5. The cycle, select move, enter weight, enter one or more reps continues until the user clicks 'End Workout.

## Data Model

### Core Entities
As the system progreses, entities may acquire more attributes and more behavior, but they are simple now

1. **Workout**
   - Start time
   - End time
   - Notes
   - List of sets


2. **Set**
   - name of move
    - weigh: int
   - List of Reps (integers) for each Move 
   - Start time
   - End time
   - Notes (e.g., "felt heavy", "form was off")

### Relationships

- A Workout contains one or more sets
- A Set contains 
  - a move, 
  - a weight
  - a list of reps
- 
### high level flow 
The user first selects a move, starts a new set with a given move and weight. adds a list of reps (integers) to each set.

### Example Workout Data

```
Workout start time: 1:00 PM

Sets:
    Bench Press 90 lbs
        Set start time: 1:00 PM
         Reps: 20, 20, 25, 3
        Set end time: 1:04 PM
        Time for set: 4:00 minutes.
    
    Bench Press 130 lbs
        Set start time: 1:10 PM
         Reps: 6, 6, 4, 1
        Set end time: 1:12 PM
        Time for set 2:00 minutes
    
    KB Swing 30 lbs
        Set start time: 1:20 PM
         Reps: 10, 10, 15, 12, 10, 8, 8, 8
        Set end time: 1:32 PM
        Time for set 12:00 minutes
```

workouts, Moves, Sets all get their own timestamps. 




## Component Development
Since we want to use components from MonstrUI, we will begin by searching the MonsterUI docs looking for canidates. 
In all likelyhood, the app will be constructed using MonserUI's Cards as the basic builing blocks.

## Architecture

Except for the off line persistence which must work on a mobile device, there is nothing unusual about this application's archecture.


## License

MIT 