
# Project Overview
A mobile-first workout tracker for logging strength training sessions, designed for extensibility and future analytics.

# Development style
In this project we use natural language (Engish )
<project manageer>
Blaine Wishart - Product Manager, Designer, Developer
In project docs the pronoun 'I' alwasy refers to Blaine Wishart.
</project manager>
<agentic system>
Is usually Claude Sonnet 4.0.
Occcasiouall I will need long term planning and I will want to use GPT-4 for that.
Often, Sonnet 3.5 will be fine. 
I am currently unclear about how to instruct the to switch between models. I would appreciate clarity on that.
I will often use the term 'Claude' without specifying sonet 3.5, sonnet 4.0 or Opus 4.0 in this document. I'm not sure how to specify which model I want to use. Suggestions are welcome.
</agentic system>
<unit testing and development lifecycle>
I expect expermentation will be required to get the combination of lifecycle, natural language coding, agentic systems and unit testing to work well together.
I will need help in learning how to specify the changes.
In general:
    1. we will start with either an bug, a runtime error, an extended feature, a PR, or a new feature. I use the term 'issue' to refer to any of these. I will ask Claude to do the implementation as well as to write the 'issue' so that Claude can do the implementatioon and write the tests.
    2. Claude can do the implementatoon or the tests in any order. What matters is that a sandox is used to verigy tests. Where that is not possible, we need to clarify the specification, that is the 'issue' so that it is possible.
    3. Occationaly, I may make quick changes to code, but only as a temporary measure. Once I see they work, I will ask Claude for help in getting the issue wirtten up properly in Englaish.
    4. End state: Will be a systm completly specified in markdown files.
</unit testing and development lifecycle>


# Alpha Release Scope
- Four components: Header, Moves, Keypad, Log
- Minimal global state: move name (string), move weight (number), move reps (array)
- Each component initially displays only its name
- Alpha release will be a big ball of mud. Everything will be in one file, App.tsx. and we will not need separate branches. 
- While the components will be minimal, they must be structurally React components.

# Setup Instructions
1. Install Node.js (v18 or v20 recommended)
2. Install Expo CLI: `npm install -g expo-cli`
3. Install dependencies: `npm install`
4. Start the app: `npx expo start`
5. Run on device: Scan QR code with Expo Go


# Component Responsibilities
- **Header:** Branding and status
- **Moves:** List of available exercises
- **Keypad:** Input for weight and reps
- **Log:** Display workout entries

# State and Data Flow
- All components read/write to a shared state object in App.tsx

# MVP
-we will not define an MVP until after the alpha release and after some real world use.

# Contribution Guidelines 
- after alpha release only
- Create a new branch for each component
- Keep changes minimal and focused
- Submit pull requests for review

# Known Issues / Next Steps
- Dependency conflicts with Expo versions
- Need to define data model for future analytics
    
