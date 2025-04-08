import "./App.css";
import React from "react";

function App() {
  const [valor1, setValor1] = React.useState(0);
  const [valor2, setValor2] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  function somar() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    setResultado(num1 + num2);
  }
  function subtrair() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    setResultado(num1 - num2);
  }
  function multiplicar() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    setResultado(num1 * num2);
  }
  function dividir() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    if (num2 === 0) {
      alert("Divisão por zero não é permitida");
      return;
    }
    setResultado(num1 / num2);
  }

  function limparCampos() {
    setValor1(0);
    setValor2(0);
    setResultado(0);
  }
  return (
    <div className="conteiner">
      <div className="entradaDosValores">
        <input
          id="in_valor1"
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          required
        />
        <input
          id="in_valor2"
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          required
        />
      </div>
      <div className="operacoes">
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
      </div>

      <div className="resultadoLimpar">
        <input type="number" value={resultado} disabled />
        <button onClick={limparCampos}>Limpar</button>
      </div>
    </div>
  );
}

export default App;
