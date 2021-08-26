import { useState } from "react";
import { useParams } from "react-router-dom";

function ExercicioDois() {
  const { nomeInicial, cpfInicial } = useParams()
  const [nome, setNome] = useState(nomeInicial);
  const [cpf, setCpf] = useState(cpfInicial);

  let editandoNome = "";
  let editandoCpf = "";

  const gerarDoc = (evento) => {
    evento.preventDefault();
    setNome(editandoNome);
    setCpf(editandoCpf);
  };

  const atualizarNome = (evento) => {
    editandoNome = evento.target.value;
  };

  const atualizarCpf = (evento) => {
    editandoCpf = evento.target.value;
  };

  return (
    <>
      <form onSubmit={gerarDoc}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o seu nome"
          onChange={atualizarNome}
        />

        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          placeholder="Digite seu cpf"
          onChange={atualizarCpf}
        />

        <input type="submit" value="Gerar documento" />
      </form>

      <p>
        Eu, {nome}, portadora do CPF {cpf}, aceito os termos deste contrato.
      </p>
    </>
  );
}

export default ExercicioDois;
