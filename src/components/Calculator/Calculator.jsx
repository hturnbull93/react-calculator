import React, { Component } from "react";
import "./Calculator.css";
import Display from "../Display/Display";

class Calculator extends Component {
  state = {
    displayValue: "0",
    numbers: [],
    operators: [],
    selectedOperator: "",
    storedValue: "",
  };

  render() {
    return (
      <div className="calculator-container">
        <Display displayValue={this.state.displayValue}/>
      </div>
    );
  }
}

export default Calculator;
