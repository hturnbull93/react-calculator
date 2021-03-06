import React, { Component } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

class Calculator extends Component {
  state = {
    displayValue: "0",
    numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"],
    operators: ["/", "x", "-", "+"],
    selectedOperator: "",
    storedValue: "",
  };

  callOperator = () => {
    let { storedValue, displayValue, selectedOperator } = this.state;
    displayValue = parseInt(displayValue);
    storedValue = parseInt(storedValue);
    let result;

    if (isNaN(displayValue) || isNaN(storedValue))
      return this.setState({ displayValue: "0" });

    switch (selectedOperator) {
      case "+":
        result = storedValue + displayValue;
        break;
      case "-":
        result = storedValue - displayValue;
        break;
      case "x":
        result = storedValue * displayValue;
        break;
      case "/":
        result = parseFloat(storedValue / displayValue);
        if (!isFinite(result)) result = 0;
        break;

      default:
        return this.setState({ displayValue: "0" });
    }
    this.setState({ displayValue: result.toString() });
  };

  setOperator = (operator) => {
    const { storedValue, displayValue } = this.state;
    if (storedValue !== "") {
      this.setState({
        selectedOperator: operator,
      });
    } else {
      this.setState({
        selectedOperator: operator,
        storedValue: displayValue,
        displayValue: "0",
      });
    }
  };

  updateDisplay = (value) => {
    let { displayValue } = this.state;
    if (value === "." && displayValue.includes(".")) return;

    let newDisplayValue;
    if (displayValue === "0") displayValue = "";
    newDisplayValue =
      value === "ce" ? displayValue.slice(0, -1) : displayValue.concat(value);
    if (newDisplayValue === "") newDisplayValue = "0";
    this.setState({ displayValue: newDisplayValue });
  };

  render() {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
