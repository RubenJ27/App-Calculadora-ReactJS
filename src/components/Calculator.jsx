import React, { useState } from "react";
import "./calculator.css";

export const Calculator = () => {
  const [result, setResult] = useState("");

  const clearResult = () => {
    setResult("");
  };

  // Cambia el signo del número actual
  const invertNumberSign = () => {
    setResult((prev) => {
      // Elimina las comas del valor anterior
      const newValue = prev.replace(/,/g, "");

      // Si el valor anterior es una cadena vacía, devuelve "0"
      if (prev === "") {
        return "";
      }

      // Cambia el signo del número y lo devuelve formateado con comas
      return formatNumberWithCommas((parseFloat(newValue) * -1).toString());
    });
  };

  const formatNumberWithCommas = (num) => {
    // Usa una expresión regular para insertar comas en las posiciones adecuadas
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onChange = (event) => {
    // Obtiene el valor del botón presionado
    const value = event.target.name;
    // Actualiza el estado del resultado
    setResult((prev) => {
      // Elimina las comas del valor anterior y agrega el nuevo valor
      const newValue = prev.replace(/,/g, "") + value;

      // Formatea el nuevo valor con comas y lo devuelve
      return formatNumberWithCommas(newValue);
    });
  };

  // Calcula el resultado de la expresión actual
  const calculate = () => {
    // Verifica si el valor actual es vacío o 0
    if (result === "" || result === "0") {
      return;
    }
    try {
      // Elimina las comas del resultado actual
      let evalResult = result.replace(/,/g, "");

      // Convierte porcentajes en su equivalente decimal (e.g., 7.5% se convierte en 0.075)
      evalResult = evalResult.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

      // Reemplaza 'x' por '*' para la multiplicación
      evalResult = evalResult.replace(/x/g, "*");

      // Evalúa la expresión y formatea el resultado con comas
      setResult(formatNumberWithCommas(eval(evalResult).toString()));
    } catch (error) {
      // Si hay un error, muestra "Error" en el resultado
      console.error("Error en el cálculo:", error);
      setResult("Error");
    }
  };

  // Maneja el cambio de valor en el campo de entrada
  const handleInputChange = (event) => {
    // Elimina las comas del valor ingresado
    const value = event.target.value.replace(/,/g, "");

    // Formatea el valor con comas y actualiza el estado del resultado
    setResult(formatNumberWithCommas(value));
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
            <button className="btn color" onClick={invertNumberSign}>
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
