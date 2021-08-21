import { Button } from "../components";
import { useState, useEffect } from "react";
import "./ExercicioUm.css";

function ExercicioUm() {
  const [citacao, setCitacao] = useState("");
  const [editandoCitacao, setEditingCitacao] = useState("");
  const [erro, setErro] = useState(false);

  const fetchFakeData = () => {
    const promise = new Promise((resolve, reject) => {
      resolve("SUCESSO!");
    });

    promise
      .then((resposta) => {
        console.log("OIE", resposta);
        return 3;
      })
      .then((response) => console.log("OIE 2", response))
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    console.log("Componente montado");
    fetchFakeData();
  }, []);

  const handleInputChange = (evento) => {
    setErro(false);
    setEditingCitacao(evento.target.value);
  };

  const atualizarCitacao = () => {
    if (editandoCitacao) {
      setCitacao(editandoCitacao);
    } else {
      setErro(true);
    }
  };

  const handleKeyDown = (evento) => {
    if (evento.key === "Enter") {
      atualizarCitacao();
    }
  };

  return (
    <>
      <div>
        <blockquote>{citacao}</blockquote>
      </div>

      <div>
        <input
          className={`input ${erro ? "input_erro" : ""}`}
          type="text"
          placeholder="Insira sua citação"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          type="primary"
          onClick={atualizarCitacao}
          texto="Inserir citação"
        />
      </div>
    </>
  );
}

export default ExercicioUm;
