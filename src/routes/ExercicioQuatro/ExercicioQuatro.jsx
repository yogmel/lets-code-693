import "./ExercicioQuatro.css";
import Card from "./components/Card";

/*
 * Exercicio para casa dia 13/08
 * 1. Extrair a const data para outro arquivo e importá-lo aqui
 * 2. Novo requisito: ao clicar no botão Destacar card, todos os outros destaques devem ser desativados e somente o componente alvo deve ser destacado
 */

const cidades = [
  "manaus",
  "são miguel das matas",
  "grossos",
  "bangladesh",
  "vilnius",
  "seoul",
];

function ExercicioQuatro() {
  return (
    <div className="exercio-quatro">
      {cidades.map((cidade, index) => (
        <Card key={index} cidade={cidade} />
      ))}
    </div>
  );
}

export default ExercicioQuatro;
