import { Component } from "react";
import { Button } from "./../components";

class ExercicioTresClasse extends Component {
  constructor() {
    super();
    this.state = {
      min: null,
      max: null,
      numAleatorio: null,
      erro: "",
    };
  }

  atualizarMin = (evento) => {
    this.setState({
      min: parseInt(evento.target.value),
    });
  };

  atualizarMax = (evento) => {
    this.setState({
      max: parseInt(evento.target.value),
    });
  };

  gerarNumAleatorio = () => {
    const { min, max } = this.state;

    if (min && max) {
      const num = Math.floor(Math.random() * (max + 1 - min)) + min;
      this.setState({
        erro: "",
        numAleatorio: num,
      });
    } else {
      this.setState({
        erro: "Insira um número!",
      });
    }
  };

  render() {
    const { erro, numAleatorio } = this.state;
    return (
      <>
        <h1>Sorteie um número</h1>
        <section>
          <span>de</span>
          <input type="number" name="min" onChange={this.atualizarMin} />
          <span>para</span>
          <input type="number" name="max" onChange={this.atualizarMax} />
          <Button
            type="primary"
            texto="Gerar sorte"
            onClick={this.gerarNumAleatorio}
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
}

export default ExercicioTresClasse;
