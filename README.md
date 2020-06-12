# React Calculator

This is a project to practice TDD with React, based on this [article](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/).

I have gained familiarity with Jest and Enzyme working on other projects, though I want to get more experience with best practice methods for test driven development of React apps.

## Brief

The calculator ha the following properties:

- Can do four operations with keys for each: `+`, `-`, `x`, and `%`, to signal which operation to perform.
- Has 12 keys that update the display: `0` to `9` (number keys), `.` (for decimals), and `ce` (for backspace).
- Has an `=` (equals) key to perform the operation.

## Screen Preview

Coming soon

## Development Journal

### Project Setup

The project was initialised with `create-react-app`.

Enzyme, and its dependencies to work with React.

```shell
npm i -D enzyme
```

`react-test-renderer` is a package that allows React components to be rendered as pure JS objects, without interacting with the DOM.

`enzyme-adapter-react-16` is needed to integrate Enzyme.

```shell
npm i -D react-test-renderer enzyme-adapter-react-16
```

Enzyme is configured for testing in `setupTest.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

Add some base styling also.

### Rendering App

In `src/components/App/App.spec.js`, wrote a test that App renders a div. Red.

The test uses Enzyme's shallow render function.

In `src/components/App/App.jsx`:

- Added a functional component App, that returns a div with className "app-container".

Green.

Also added some css to `src/components/App/App.css`, imported in to `App.jsx`

Import and render App in `index.js`.

### App Renders Calculator

In `App.spec.js` wrote a test that App renders a Calculator component. Red

The test uses Enzyme's `containsMatching Element` method.

In `src/components/Calculator/Calculator.spec.js`, wrote a test that Calculator renders a div. Red.

In `src/components/Calculator/Calculator.jsx`:

- Added a Calculator component.
- Renders div.
- Also added some state for later on.

