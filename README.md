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

Calculator test green.

- Imported and rendered Calculator in App.

App test Green.

### Snapshot Testing for App

Snapshots are written after a component has been written, and help alert you to unexpected changes in a rendered component.

This is done with the `enzyme-to-json` package.

```shell
npm i -D enzyme-to-json
```

Wrote a snapshot test for App. using the `toMatchSnapshot` method.

[Snapshot docs](https://jestjs.io/docs/en/snapshot-testing).

### Calculator Renders Display

In `Calculator.spec.js` wrote a test that Calculator should render the Display component. Red.

In `src/components/Display/Display.spec.js`, wrote a test that Display renders a div. Red.

In `Display.jsx`:

- Added a stateless function component that takes `displayValue` as a prop.
- PropTypes is used to specify that `displayValue` is a string that is required as a prop to the component (raises a warning if it is not found).

Display test green.

- Imported and rendered Display in Calculator.

Calculator test green.

To fix the warning from the prop types requirement, `displayValue` can be passed with an empty string for now.

Updated the Calculator renders Display test matching element to be a Display component with the prop `displayValue` passed. `displayValue` is the Calculator instance's `displayValue` in its state. Red.

The fact that the value comes from the instance means that just passing in the same thing ("0"), won't pass the test.

- Calculator passes a prop to Display `displayValue` from its state`.

Green.

### Display Renders displayValue

Wrote a test that Display should render the value of the displayValue prop. Red.

- Added a paragraph to render the displayValue in Display.

### Display Snapshot

Wrote a Display snapshot test.

Also added some CSS to Display.

### Calculator Renders Keypad

Wrote a test that Calculator renders a Keypad Component. Red.

Wrote a test that Keypad renders a div, specifying all its props. Red.

- Wrote Keypad stateful function component returning a div.
- This has propTypes specified in line with the props specified in the test.

Keypad test green.

- Imported Keypad into Calculator.
- Render Keypad passing props required by test.
- Add empty functions in Calculator for those passed as props to Keypad.

Calculator test green.

### Calculator Snapshot

Wrote a Calculator snapshot test.

### Keypad Renders Numbers

Wrote a test that Keypad renders the numbers passed from the numbers prop. Red.

- Keypad function maps through numbers prop and returns p elements with the number as its key and content.
- These are returned, within another div of class "numbers-container".
- Adjusted previous test to reflect the fact there are two divs now.

Green.

### Keypad Renders Operators

Wrote a test that Keypad renders the operators passed from the operators prop. Red.

- Keypad function maps through operators prop and returns p elements with the operator as its key and content.
- These are returned, within another div of class "operators-container".
- Adjusted previous test to reflect the fact there are three divs now.

Added some css for the keypad also.

### Keypad Renders a Key

Wrote a test for Keypad to render a Key component. Red.

Wrote a test for Key 