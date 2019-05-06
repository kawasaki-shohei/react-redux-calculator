import React, { Component } from 'react';
import NumBtn from "./NumBtn";
import PlusBtn from "./PlusBtn";
import MinusBtn from "./MinusBtn";
import ClearBtn from "./ClearBtn";
import Result from "./Result";

class CalculatorContainer extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div>
        <table>
          <tr>
            <td colspan="3"><ClearBtn onClick={actions.onClearClick} /></td>
            <td><button>÷</button></td>
          </tr>
          <tr>
            <td><NumBtn n={7} onClick={() => actions.onNumClick(7)} /></td>
            <td><NumBtn n={8} onClick={() => actions.onNumClick(8)} /></td>
            <td><NumBtn n={9} onClick={() => actions.onNumClick(9)} /></td>
            <td><button>×</button></td>
          </tr>
          <tr>
            <td><NumBtn n={4} onClick={() => actions.onNumClick(4)} /></td>
            <td><NumBtn n={5} onClick={() => actions.onNumClick(5)} /></td>
            <td><NumBtn n={6} onClick={() => actions.onNumClick(6)} /></td>
            <td><MinusBtn onClick={actions.onMinusClick} /></td>
          </tr>
          <tr>
            <td><NumBtn n={1} onClick={() => actions.onNumClick(1)} /></td>
            <td><NumBtn n={2} onClick={() => actions.onNumClick(2)} /></td>
            <td><NumBtn n={3} onClick={() => actions.onNumClick(3)} /></td>
            <td><PlusBtn onClick={actions.onPlusClick} /></td>
          </tr>
          <tr>
            <td colspan="2">
              <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
            </td>
            <td><button>.</button></td>
            <td><button>=</button></td>
          </tr>
        </table>
        <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
      </div>
    );
  }
}

export default CalculatorContainer;