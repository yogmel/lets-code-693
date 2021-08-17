import "./ExercicioQuatro.css";
import Card from "./components/Card";
import { previsao } from "./data/previsao";
import { useEffect, useState } from "react";

/*
 * Exercicio para casa dia 13/08
 * 1. Extrair a const data para outro arquivo e importá-lo aqui
 * 2. Novo requisito: ao clicar no botão Destacar card, todos os outros destaques devem ser desativados e somente o componente alvo deve ser destacado
 */

function ExercicioQuatro() {
  const [dado, setDado] = useState({});

  const fetchData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=araraquara&appid=35d2abda2c6b48e0b3be5a232b5f0033&units=metric"
    )
      .then((data) => data.json())
      .then((response) => {
        const obj = {
          cidade: response.name,
          clima: response.weather[0].main,
          temperatura: {
            min: response.main.temp_min,
            max: response.main.temp_max,
          },
        };
        setDado(obj);
      });
  };

  useEffect(() => {
    console.log("montado");
    fetchData();
  }, []);

  const reset = (id) => {
    // const novosDados = dados.map((dado) => ({
    //   ...dado,
    //   destaque: id === dado.id,
    // }));

    setDado({});
  };

  return (
    <div className="exercio-quatro">
      {/* {dados.map((dado) => ( */}
      <Card dado={dado} reset={reset} />
      {/* ))} */}
    </div>
  );
}

export default ExercicioQuatro;
