import { useState, useEffect } from "react";
const InputNumbers = () => {
  const MathOperation = (props) => {};
  return (
    <div>
      <form action="" method="post">
        <table>
          <tr>
            <td>
              <label for="num1">Enter number 1: </label>
            </td>
            <td>
              <input type="number" name="num1" id="num1" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="num2">Enter number 2: </label>
            </td>
            <td>
              <input type="number" name="num2" id="num2" />
            </td>
          </tr>
          <tr>
            <td>
              <select id="mathOp" className="btn btn-info">
                <option id="mathOp">Addition</option>
                <option id="mathOp">Difference</option>
                <option id="mathOp">Product</option>
                <option id="mathOp">Division</option>
              </select>
            </td>
            <td>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={MathOperation}
              >
                Do Math
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default InputNumbers;
