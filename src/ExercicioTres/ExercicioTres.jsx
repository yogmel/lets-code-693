import { Button } from "./../components";
import { useState } from "react";

function ExercicioTres() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [numAleatorio, setNumAleatorio] = useState(null);
  const [erro, setErro] = useState("");

  const atualizarMin = (evento) => {
    setMin(parseInt(evento.target.value));
  };

  const atualizarMax = (evento) => {
    setMax(parseInt(evento.target.value));
  };

  /*
   * Mensagens de erro:
   * 1. Se o min for maior que o max
   * 2. Se algum número for negativo
   */
  const gerarNumAleatorio = () => {
    if (min && max) {
      setErro("");
      const num = Math.floor(Math.random() * (max + 1 - min)) + min;
      setNumAleatorio(num);
    } else {
      setErro("Insira um número!");
    }
  };

  return (
    <>
      <h1>Sorteie um número</h1>
      <section>
        <span>de</span>
        <input type="number" name="min" onChange={atualizarMin} />
        <span>para</span>
        <input type="number" name="max" onChange={atualizarMax} />
        <Button
          type="primary"
          texto="Gerar sorte"
          onClick={gerarNumAleatorio}
        />
      </section>
      {/* Mostrar a mensagem de erro somente quando o botão "Gerar sorte" for clicado e qualquer um dos inputs for vazio OU não for um número */}
      {erro && <p className="erro">Erro: {erro}</p>}
      {numAleatorio && !erro && (
        <>
          <h2>O número sorteado é</h2>
          <p>{numAleatorio}</p>
        </>
      )}
    </>
  );
}

export default ExercicioTres;
