import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ExercicioTres() {
  const query = useQuery();
  const minInicial = parseInt(query.get("minInicial"))
  const maxInicial = parseInt(query.get("maxInicial"))

  const [min, setMin] = useState(minInicial);
  const [max, setMax] = useState(maxInicial);
  const [numAleatorio, setNumAleatorio] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    console.log("Funcional: Componente montado");
    return () => {
      console.log("Funcional: Componente desmontado");
    };
  }, []); // componentDidMount e componentWillUnmount

  useEffect(() => {
    console.log("Funcional: Componente atualizado, min", min, numAleatorio);
  }, [min, numAleatorio]); // componentDidUpdate, somente quando min mudar

  useEffect(() => {
    console.log("Funcional: Componente atualizado");
  }); // componentDidUpdate, toda vez

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
        <input type="number" name="min" value={min} onChange={atualizarMin} />
        <span>para</span>
        <input type="number" name="max" value={max} onChange={atualizarMax} />
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
