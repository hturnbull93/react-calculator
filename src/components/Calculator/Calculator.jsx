import React, { Component } from 'react';

class Calculator extends Component {
  state = { 
    displayValue: 0,
    numbers: [],
    operators: [],
    selectedOperator: '',
    storedValue: ''
   }
  render() { 
    return ( 
      <div className="calculator-container"></div>
     );
  }
}

export default Calculator;