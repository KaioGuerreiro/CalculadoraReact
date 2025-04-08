import React from "react";
import "./index.css";

function Calculadora(){
    const [valor1, setValor1] = React.useState(0);
    const [valor2, setValor2] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    return(
        <div className="conteiner" >
            <div className="entradaDosValores">
                <input type="number" />
                <input type="number" />
            </div>
            <div className="operacoes">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
            </div>
            <div className="resultadoLimpar">
                <input type="number" disabled />
                <button>L</button>
            </div>
        </div>
    )
}

export default Calculadora;