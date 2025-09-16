# Alpha Release Issues

## 1. Confirm App Runs on Device
- [ ] Ensure `npx expo start` launches the app and QR code is scannable in Expo Go.
- [ ] App loads on a physical device and displays all four components.
- [ ] Troubleshoot any dependency or environment issues (see Known Issues in Claude.md).

## 2. Minimal Component Structure
- [ ] Each of Header, Moves, Keypad, and Log is a functional React component in App.tsx.
- [ ] Each component displays only its name (e.g., "I am the banner").
- [ ] All components are rendered in the main view.

## 3. Shared State
- [ ] App.tsx defines and initializes:
    - moveName (string, default: "")
    - moveWeight (number, default: 0)
    - moveReps (array, default: [])
- [ ] State is passed to components (even if unused for now).

## 4. Code Quality and Structure
- [ ] App.tsx is the only file changed for alpha ("big ball of mud" approach).
- [ ] All code is committed to main branch (no branches needed for alpha).

## 5. Document Any Blockers or Issues
- [ ] Note any dependency conflicts, Expo errors, or environment problems encountered.
- [ ] Add troubleshooting steps or workarounds to Claude.md or a new TROUBLESHOOTING.md if needed.

## 6. Prepare for Next Steps
- [ ] Review and update Claude.md with any lessons learned or process changes from alpha.
- [ ] Plan for post-alpha refactor and MVP definition after real-world use.

---

If you encounter any issues not listed here, add them to this file for tracking during the alpha phase.