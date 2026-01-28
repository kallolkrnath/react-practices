## React Hooks Practice Playground

This project is a **React + Vite** sandbox focused on **practicing and demonstrating core React hooks**.  
The main `App` component renders a sequence of small, focused examples that each showcase a particular hook:

- **`useState`**
- **`useRef`**
- **`useEffect`**
- **`useContext`**
- **`useMemo`**
- **`useCallback`**
- **`useReducer`**

It is intended as a learning / demo app, not a production application.

---

## Tech Stack

- **Build tool**: Vite (`vite`, `vite build`, `vite preview`)
- **UI library**: React 19 (`react`, `react-dom`)
- **Language**: JavaScript (ES modules)
- **Linting**: ESLint with React Hooks and React Refresh plugins
- **Styling**: Utility-style classes (Tailwind-like classes in JSX)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

The app will be served by Vite (usually on `http://localhost:5173`). Open it in your browser to explore the hook examples.

### 3. Build and preview

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

### 4. Linting

```bash
npm run lint
```

---

## Project Structure

High-level structure:

- **`index.html`** – Vite entry HTML file with root mount node.
- **`src/main.jsx`** – React entry point; mounts `<App />` with `ReactDOM.createRoot` and `StrictMode`.
- **`src/App.jsx`** – Composes and renders all hook demo components inside a `<main>` element.
- **`src/assets/`** – Static assets (e.g. `react.svg`).
- **`src/App.css`, `src/index.css`** – Global and app-level styles.
- **`src/practices/`** – All the hook example components, grouped by hook:
  - **`useStateHook/`**
  - **`useRefHook/`**
  - **`useEffectHook/`**
  - **`useContextHook/`**
  - **`useMemoHook/`**
  - **`useCallbackHook/`**
  - **`useReducerHook/`**

---

## Hook Examples Overview

Below is a conceptual overview of what each folder demonstrates. File names correspond to the components imported in `src/App.jsx`.

### `useState` examples (`src/practices/useStateHook/`)

These components focus on **local state management** and common `useState` patterns:

- **`ColorChanger.jsx`** – Demonstrates state-driven UI updates by changing colors based on state.
- **`CarChanger.jsx`** – Shows updating and replacing complex state (e.g. object-like data about a car).
- **`MyComponent.jsx`** – General `useState` examples such as multiple state variables or derived values.
- **`CheckBox.jsx`** – Toggles boolean state from checkbox input.
- **`TextField.jsx` (exported as `MyInput`)** – Manages controlled text input with `useState`.
- **`Counter.jsx` (exported as `CounterState`)** – Demonstrates functional `setState` updates (e.g. calling `setCount` multiple times in one handler).

### `useRef` examples (`src/practices/useRefHook/`)

These demonstrate **refs for instance values and DOM access**:

- **`Counter.jsx` (exported as `CounterRef`)** – Uses `useRef` to persist values across renders without causing re-renders.
- **`Input.jsx`** – Likely focuses on controlling input focus or reading raw DOM values via refs.
- **`VideoPlayer.jsx`** – Demonstrates controlling a media element (play/pause/seek) through a ref.

### `useEffect` examples (`src/practices/useEffectHook/`)

These components explore **side effects and dependency arrays**:

- **`Counter.jsx` (exported as `CounterEffect`)** – Shows how dependency arrays affect when an effect runs and includes commented-out examples of:
  - no dependency array (causing an infinite loop),
  - an empty dependency array (`[]`),
  - and a dependency array with multiple values (e.g. `[count, name]`).
- **`HandMove.jsx`** – Likely tracks mouse movement or similar side-effect-driven interactions.
- **`MyComponent.jsx`**, **`MyComponent2.jsx`** – Additional patterns with mounting/unmounting logic, cleanup functions, or multiple effects.

### `useContext` examples (`src/practices/useContextHook/Contact.jsx`)

This file exports `MyApp`, which demonstrates:

- Creating **two contexts**:
  - `ThemeContext` for light/dark theming.
  - `CurrentUserContext` for a logged-in user.
- **`MyProviders`** – Wraps children with both contexts and manages `currentUser` state.
- **`WelcomePanel`** – Reads user context and conditionally renders either `Greeting` or `LoginForm`.
- **`LoginForm`** – Controlled form with `firstName` and `lastName` managed by `useState`, enabling login only when both fields are filled.
- **`Panel` and `Button`** – Styled components that consume `ThemeContext` to switch between light and dark themes.

This example shows practical composition of multiple contexts and consuming them in nested components.

### `useMemo` examples (`src/practices/useMemoHook/Counter.jsx`)

The `CounterMemo` component demonstrates:

- Using `useMemo` to **memoize expensive calculations** (`cubeNum`) based on `number`.
- Preventing unnecessary recalculations when unrelated state (`Counter`) changes.
- Log messages (`"Calculation done."`) to help visualize memoization behavior in the console.

### `useCallback` examples (`src/practices/useCallbackHook/`)

These examples show **memoized callback functions**:

- **`MainPage.jsx`** – Maintains `count` state and creates a memoized function `newFn` via `useCallback`.
  - `newFn` is passed down to `Header` so that its identity is stable across renders.
  - A commented alternative shows how dependencies influence when the callback changes.
- **`Header.jsx`** – Receives `newFn` as a prop, ideal for combining with `React.memo` to avoid unnecessary re-renders.

### `useReducer` examples (`src/practices/useReducerHook/Counter.jsx`)

This component shows **state management with `useReducer`**:

- Manages more complex state transitions via a reducer function and `dispatch`.
- Typically demonstrates actions like `increment`, `decrement`, and `reset`, contrasting with the simpler `useState` counter.

---

## How `App` Composes the Examples

The main `App` component (`src/App.jsx`) imports each example component and renders them in order inside a single `<main>`:

- Sections are visually separated by `<hr>` elements and inline headings/comments.
- This makes it easy to scroll the page and **see each hook example in context** without navigation or routing.

To focus on a single hook while developing, you can:

- Comment out other imports/usages in `App.jsx`, or
- Create a temporary minimal `App` that only renders the example you’re working on.

---

## Scripts (from `package.json`)

- **`npm run dev`** – Start the Vite dev server.
- **`npm run build`** – Build the app for production.
- **`npm run preview`** – Preview the production build locally.
- **`npm run lint`** – Run ESLint on the project.

---
