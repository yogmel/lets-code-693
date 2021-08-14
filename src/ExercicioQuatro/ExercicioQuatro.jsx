import "./ExercicioQuatro.css";
import Card from "./components/Card";
import { previsao } from "./data/previsao";
import { useState } from "react";

/*
 * Exercicio para casa dia 13/08
 * 1. Extrair a const data para outro arquivo e importá-lo aqui
 * 2. Novo requisito: ao clicar no botão Destacar card, todos os outros destaques devem ser desativados e somente o componente alvo deve ser destacado
 */

function ExercicioQuatro() {
  const [dados, setDados] = useState(previsao);

  const reset = (id) => {
    const novosDados = dados.map((dado) => ({
      ...dado,
      destaque: id === dado.id,
    }));

    setDados(novosDados);
  };

  return (
    <div className="exercio-quatro">
      {dados.map((dado) => (
        <Card dado={dado} reset={reset} />
      ))}
    </div>
  );
}

export default ExercicioQuatro;
