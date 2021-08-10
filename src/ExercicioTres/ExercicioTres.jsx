import { Button } from "./../components";
import { useState } from "react";

function ExercicioTres() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [numAleatorio, setNumAleatorio] = useState(null);

  const atualizarMin = (evento) => {
    setMin(parseInt(evento.target.value));
  };

  const atualizarMax = (evento) => {
    setMax(parseInt(evento.target.value));
  };

  const gerarNumAleatorio = () => {
    const num = Math.floor(Math.random() * (max + 1 - min)) + min;
    setNumAleatorio(num);
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
      <p className="erro">Mensagem de erro</p>

      {numAleatorio && (
        <>
          <h2>O número sorteado é</h2>
          <p>{numAleatorio}</p>
        </>
      )}
    </>
  );
}

export default ExercicioTres;
