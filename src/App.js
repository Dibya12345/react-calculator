import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
    calculateOutput();
  };

  const calculateOutput = async () => {
    try {
      // Using eval() for simplicity, but be cautious as it can be a securityrisk
      const result = eval(input);
      setOutput(result);
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleReset = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("*")}>x</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={() => handleInput("%")}>%</button>
          <button onClick={() => handleInput("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("(")}>(</button>
          <button onClick={() => handleInput(")")}>)</button>
          <button onClick={() => handleInput("**")}>pow</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="row">
          <button onClick={calculateOutput}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
