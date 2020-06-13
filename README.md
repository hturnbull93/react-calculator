# React Calculator

This is a project to practice TDD with React, based on this [article](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/).

I have gained familiarity with Jest and Enzyme working on other projects, though I want to get more experience with best practice methods for test driven development of React apps.

## Brief

The calculator has the following properties:

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

- Wrote Keypad stateless function component returning a div.
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

Wrote a test for Key taking props that it should render a div. Red.

- Key is a stateless functional component that renders a div.
- Its props are required using PropTypes.

Key test green.

- Imported and rendered a Key in Keypad.

Keypad test green.

### Key Renders keyValue

Wrote a test that Key renders the prop keyValue. Red.

- Key renders a p tag with the keyValue passed.

Green.

Added and imported css for Key.

### Key Snapshot

Wrote a Key snapshot test.

### Refactor Keypad to Use Keys

The Keypad should render a Key for each of the numbers and operators, and also for the `=` key.

Wrote a test that the Keypad renders a Key component for each of numbers and operators, and submit. Red.

- Switched out the p tags mapped from numbers and operators to Key components.
- Passed in the relevant keyAction, key, keyValue props to Keys.
- Wrapped the last non mapped key wth a div class of "submit-container".

The other tests that check for the rendered values of operators and numbers now break because of shallow rendering not rendering the key that now renders the value. Updated these tests to use mount instead of shallow.

Also fixed the test that now finds 4 divs instead of three.

### Keypad Snapshot

Wrote a Keypad snapshot test.

### Updating Calculator State

Added the numbers 0 to 9, . and ce to the Calculator's numbers state array.

Added the operators to the Calculators operators state array.

### Number Key Clicks Call updateDisplay

Wrote a test that updateDisplay is called when a number key is clicked. Red.

For functional testing of the Calculator, it is mounted. The jest `spyOn` method is used to track calls of the wrapper instance's `updateDisplay` method. The instance is caused to take on the spy with the `forceUpdate` method. Enzyme's `simulate("click")` method is used to perform the click.

- The test finds no class with ".number-key" to click, so in `Key.jsx` updated the wrapping div to have a class of the passed keyType prop.
- Set the onClick action for the key as an anonymous arrow function returning the keyAction prop function (in this case it is passed calculator's `updateDisplay` method via Keypad), passing the keyValue prop as an argument.

Green.

### Operator Key Clicks Call setOperator

Wrote a test that setOperator is called when an operator key is clicked. Green.

This test is already passing due to the previous change.

### Submit Key Clicks Call callOperator

Wrote a test that callOperator is called when the submit key is clicked. Green.

This test is already passing due to the previous change.

### updateDisplay Functionality

Wrote a test that updateDisplay updates displayValue. Red.

- Wrote updateDisplay to set the state with the passed displayValue.

Green.

Wrote a test that it concatenates sequential values into the displayValue. Red.

- If the display value is still "0", set it to an empty string.
- Then concatenate the passed value onto the displayValye and set that as state.

Green.

Wrote a test that passing "ce" will remove the last character of the display value. Red.

- Added a if statement when passed "ce" to use slice to remove teh last character from the string, else to concatenate the value onto the string as before.

Green.

Wrote a test that passing "." when there is already one will prevent it being added. Red.

- Added guard statement to return if the value is "." and the displayValue already contains one.

Green.

Wrote a test that if the last character is deleted the displayValue is "0". Red.

- Added a check after the assignment of newDisplayValue, if it is an empty string, set it to "0".

Refactors:

- Assign newDisplayValue using a ternary operator instead of if else blocks.
- Covert other blocks to single line statements.

### setOperator Functionality

Wrote a test that setOperator updates the value of selectedOperator. Red.

- setOperator sets state with the passed value.

Green.

Wrote a test that it updates the storedValue with the current displayValue. Red.

- setState sets storedValue with the current displayValue.

Green.

Wrote a test that it sets displayValue to "0". Red.

- setState sets displayValue to "0".

Green.

Wrote a test that it does not update storedValue if selectedOperator already set. Red.

- Added if else logic checking for the storedValue being an empty string.

Green.

Refactor:

- Destructure constants from state.

### callOperator Functionality

Wrote a test that callOperator performs addition. Red.

- Destructure storedValue and displayValue from state.
- Parse them to integers.
- Add them.
- Set state display value to the result converted to a string.

Wrote a test that callOperator performs subtraction. Red.

- Added a switch based on the selected operator to either add or subtract.
- The default case returns from the function to prevent breaking other tests.

Wrote a test that callOperator performs multiplication. Red.

- Added a switch case for "x" that multiplies.

Green.

Wrote a test that callOperator performs division. Red.

- Added a case for division to the switch.
- result is set with the parseFloat of the division of the stored numbers.

Green.

Wrote a test that callOperator sets displayValue to "0" if result is NaN. Red.

- added guard statement that checks for displayValue and storedValue being NaN, and set state displayValue to "0".

Green.

Wrote a test that it sets displayValue to "0" if the result is infinite. Red.

- Add a guard statement in division case that if the result is not finite, set result to 0.

Green.

Wrote a test that it will set displayValue to "0" if operator not recognised. Red.

- Added the default switch to set state displayValue to "0".

Green.
