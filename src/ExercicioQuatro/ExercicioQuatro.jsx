import "./ExercicioQuatro.css";
import Card from "./components/Card";
import { faSun, faCloud } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/*
 * Exercicio para casa dia 13/08
 * 1. Extrair a const data para outro arquivo e importá-lo aqui
 * 2. Novo requisito: ao clicar no botão Destacar card, todos os outros destaques devem ser desativados e somente o componente alvo deve ser destacado
 */

const data = [
  {
    data: "24/03",
    icone: faSun,
    temperatura: {
      max: 30,
      min: 18,
    },
  },
  {
    data: "25/03",
    icone: faCloud,
    temperatura: {
      max: 25,
      min: 15,
    },
  },
  {
    data: "26/03",
    icone: faSun,
    temperatura: {
      max: 40,
      min: 28,
    },
  },
  {
    data: "26/03",
    icone: faSun,
    temperatura: {
      max: 40,
      min: 28,
    },
  },
];

function ExercicioQuatro() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercio-quatro">
      {data.map((item) => (
        <>
          <Card
            data={item.data}
            icone={item.icone}
            temperatura={item.temperatura}
            count={count}
          />
          <button onClick={() => setCount(count + 1)}>aaa</button>
        </>
      ))}
    </div>
  );
}

export default ExercicioQuatro;
