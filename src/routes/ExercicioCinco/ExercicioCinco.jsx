import { useState } from "react";
import "./ExercicioCinco.css";

function ExercicioCinco() {
  const [mensagens, setMensagens] = useState(["ITEM INICIAL"]);
  const [editandoMensagem, setEditandoMensagem] = useState("Mensagem Padrão");

  const atualizarEditandoMensagem = (evento) => {
    setEditandoMensagem(evento.target.value);
  };

  const adicionarMensagem = () => {
    setMensagens([...mensagens, editandoMensagem]);
    setEditandoMensagem("");
  };

  return (
    <section className="exercicio-cinco">
      <div className="mensagens-input">
        <input
          type="text"
          placeholder="Insira sua mensagem"
          name="mensagem"
          value={editandoMensagem}
          onChange={atualizarEditandoMensagem}
        />
        <button onClick={adicionarMensagem}>Adicionar mensagem</button>
      </div>

      <div className="mensagens-container">
        {mensagens.map((mensagem, index) => (
          <p key={index}>{mensagem}</p>
        ))}
      </div>
    </section>
  );
}

export default ExercicioCinco;
