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

  callOperator = () => {};

  setOperator = (operator) => {
    this.setState({ selectedOperator: operator });
  };

  updateDisplay = (value) => {
    let { displayValue } = this.state;
    if (value === "." && displayValue.includes(".")) return

    let newDisplayValue
    if (displayValue === "0") displayValue = "";
    newDisplayValue = value === "ce" ? displayValue.slice(0, -1) : displayValue.concat(value)
    if (newDisplayValue === "") newDisplayValue = "0"
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
