import React, { useState } from "react";
import "./calculator.css";

export const Calculator = () => {
  const [result, setResult] = useState("");

  const clearResult = () => {
    setResult("");
  };

  const deleteLastCharacter = () => {
    setResult(result.slice(0, -1));
  };

  const onChange = (e) => {
    const value = e.target.name;
    setResult((prev) => formatNumber(prev.replace(/,/g, "") + value));
  };

  const calculate = () => {
    try {
      let evalResult = result.replace(/,/g, "");
      evalResult = evalResult.replace(/(\d+)%/g, "($1/100)");
      evalResult = evalResult.replace(/x/g, "*");
      setResult(formatNumber(eval(evalResult).toString()));
    } catch (error) {
      setResult("Error");
    }
  };

  const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    setResult(formatNumber(value));
  };

  return (
    <>
      <div className="autor">Ruben Jaramillo Cervantes</div>
      <div className="container">
        <div className="main">
          <div>
            <input type="text" placeholder="0" value={result} className="input" onChange={handleInputChange} />
          </div>
          <div className="row1">
            <button className="btn color" onClick={clearResult}>
              AC
            </button>
            <button className="btn color" onClick={deleteLastCharacter}>
              +/-
            </button>
            <button className="btn color" name="%" onClick={onChange}>
              %
            </button>
            <button className="btn color" name="/" onClick={onChange}>
              ÷
            </button>
          </div>
          <div className="row2">
            <button className="btn" name="7" onClick={onChange}>
              7
            </button>
            <button className="btn" name="8" onClick={onChange}>
              8
            </button>
            <button className="btn" name="9" onClick={onChange}>
              9
            </button>
            <button className="btn color" name="x" onClick={onChange}>
              x
            </button>
          </div>
          <div className="row3">
            <button className="btn" name="4" onClick={onChange}>
              4
            </button>
            <button className="btn" name="5" onClick={onChange}>
              5
            </button>
            <button className="btn" name="6" onClick={onChange}>
              6
            </button>
            <button className="btn color" name="-" onClick={onChange}>
              -
            </button>
          </div>
          <div className="row4">
            <button className="btn" name="1" onClick={onChange}>
              1
            </button>
            <button className="btn" name="2" onClick={onChange}>
              2
            </button>
            <button className="btn" name="3" onClick={onChange}>
              3
            </button>
            <button className="btn color" name="+" onClick={onChange}>
              +
            </button>
          </div>
          <div className="row5">
            <button className="btn del" name="0" onClick={onChange}>
              0
            </button>
            <button className="btn" name="." onClick={onChange}>
              .
            </button>
            <button className="btn color" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
