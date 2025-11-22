# Lingo/Wordle Game

This application is an implementation of the popular word game Lingo/Wordle, built with React and Redux.

## How to Play

The objective of the game is to guess a secret five-letter word in six attempts.

1.  At the beginning of the game, a new five-letter word is chosen by the computer.
2.  You have six chances to guess the word.
3.  Enter your five-letter guess.
4.  After each guess, the letters will be colored to give you clues:
    *   **Green**: The letter is in the word and in the correct position.
    *   **Yellow**: The letter is in the word but in the wrong position.
    *   **Gray**: The letter is not in the word.
5.  If you guess the word correctly, you win!
6.  If you fail to guess the word in six attempts, the game is over, and you can start a new game with a different word.

## Tech Stack

*   **React**: A JavaScript library for building user interfaces.
*   **Redux**: A predictable state container for JavaScript apps.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **SASS**: A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).

## Project Structure

```
/
├── public/           # Public assets and index.html
├── src/              # Application source code
│   ├── components/   # React components
│   ├── constants/    # Application constants, like the word list
│   ├── slices/       # Redux slices for state management
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Application entry point
│   └── store.ts      # Redux store configuration
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!