# Project Overview
A mobile-first workout tracker for logging strength training sessions, designed for extensibility and future analytics.

# Development Style
In this project we use natural language (English) for specifications and requirements.

<project manager>
Blaine Wishart - Product Manager, Designer, Developer
In project docs the pronoun 'I' always refers to Blaine Wishart.
</project manager>

<agentic system>
Primary: Claude Sonnet 4.0 for implementation and analysis
Planning: Opus 4.0 for long-term planning and architecture decisions
Fallback: Sonnet 3.5 for routine tasks

Model selection approach:
- For complex architectural analysis: explicitly request Opus 4.0
- For implementation and coding: Sonnet 4.0 (default)
- For simple tasks: any available model

I will often use the term 'Claude' without specifying model version in this document. The context and task complexity should guide model selection.
</agentic system>

<unit testing and development lifecycle>
Experimentation required to optimize the combination of lifecycle, natural language coding, agentic systems and unit testing.

Process:
1. Start with an issue: bug, runtime error, feature extension, PR, or new feature
2. Claude implements AND writes tests (order flexible based on task)
3. Use sandbox verification where possible; clarify specifications when not
4. Temporary manual changes acceptable, but formalize through Claude afterward
5. End state: System completely specified in markdown files
</unit testing and development lifecycle>

# Architecture Decisions

## Development Toolchain Philosophy (Post-Alpha Decision)
**Decision:** Unix-inspired MCP (Model Context Protocol) toolchain
- **Philosophy:** "Tools with minimal surface area, one clear task each, enhancing LLM-based terminal development"
- **Approach:** MCP all the way down - avoid complex tool interactions
- **Inspiration:** Unix design principles applied to AI-assisted development
- **Benefits:** Clean separation of concerns, composable functionality, maintainable complexity

**Implementation Strategy:**
- Each tool does one thing well
- Tools communicate via MCP protocol
- Claude orchestrates tool composition
- Lightweight editors focused on editing only
- MCP servers handle specialized tasks (file ops, markdown processing, spell check, etc.)

## Component Communication (Alpha Lessons Learned)
**Decision:** Props drilling for shared state management
- **Rationale:** Simplicity for alpha release; easy to understand and debug
- **Implementation:** WorkoutState interface with state and setters passed to all components
- **Future:** Consider React Context or custom hooks for MVP phase

## State Management
**Current:** Three-piece shared state in App.tsx
- `moveName` (string): Selected exercise
- `moveWeight` (number): Current weight setting
- `moveReps` (number[]): Array of rep counts per set

**Pattern:** "Bulletin board" - single source of truth accessible by all components

# Alpha Release Status ✅ COMPLETED
- [x] Four functional React components: Header, Moves, Keypad, Log
- [x] Shared state communication via props drilling
- [x] Interactive controls for move selection, weight adjustment, rep tracking
- [x] Visual state feedback across all components
- [x] Mobile-first responsive styling
- [x] Clean dependency resolution (removed webpack config conflict)
- [x] Expo development server functional

**Key Achievement:** Proved component communication architecture works

# Setup Instructions
1. Install Node.js (v18 or v20 recommended)
2. Install dependencies: `npm install`
3. Start development server: `npx expo start`
4. Test on device: Scan QR code with Expo Go app

## Version Requirements
- **Expo SDK:** 54.0.0
- **Expo Go App:** Version 54+ (on device)
- **React:** 19.1.0
- **React Native:** 0.81.4

**Note:** Expo CLI global install no longer required. Ensure your device's Expo Go app matches the project's Expo SDK version.

# Component Implementation

## Current Responsibilities
- **Header:** Status display ("Current: [move] [weight]kg" or "Ready to start")
- **Moves:** Exercise selection with visual feedback (Squat, Bench Press, Deadlift)
- **Keypad:** Weight controls (±5kg buttons) and rep management (Add 8, Clear)
- **Log:** Display last set ("Last: [move] [weight]kg x [reps]" or "No entries yet")

## Data Flow Pattern
All components receive WorkoutState props containing:
- State values: moveName, moveWeight, moveReps
- State setters: setMoveName, setMoveWeight, setMoveReps

Pattern ensures single source of truth with predictable data flow.

# MVP Planning
**Status:** To be defined after alpha real-world testing

**Next Phase Considerations:**
- Refactor from "big ball of mud" to organized component structure
- Enhanced state management (Context API or state management library)
- Persistent storage for workout history
- Additional exercise types and customization
- Data export functionality

# Development Process Learnings

## Git Workflow
- Commit functional milestones with descriptive messages
- Include Claude Code attribution in commits
- Maintain clean working tree between major changes

## Dependency Management
- Remove conflicting packages proactively
- Clean install after package.json changes
- Monitor Expo compatibility warnings

## Component Architecture
- Start with minimal implementation
- Prove communication patterns work
- Extend functionality incrementally
- Prioritize user testing over premature optimization

# Known Issues / Resolved
- ✅ Dependency conflicts with Expo versions (resolved: removed webpack config)
- ✅ Component isolation (resolved: implemented props drilling)
- 📋 AsyncStorage version mismatch warning (non-blocking)

# Commands Reference
```bash
npm install              # Install dependencies
npx expo start          # Start development server
git add . && git commit # Commit changes (with proper message)
```

# Next Steps

Refactor the big ball of mud into 4 separate components that share data in the bulletin board, but can evolve separately from each other.
