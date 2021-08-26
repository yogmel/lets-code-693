import { Component } from "react";
import { Button } from "./../components";

class ExercicioTresClasse extends Component {
  constructor() {
    super();
    console.log("Constructor");

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

  componentDidMount() {
    console.log("Componente montado");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Componente atualizado");
  }

  componentWillUnmount() {
    console.log("Componente desmontado");
  }

  render() {
    console.log("Render");

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

class Pessoa {
  constructor(nome, idade) {}

  render() {}

  superSaudacao() {
    return this.saudacao;
  }
}

class Profissional extends Pessoa {
  constructor(nome, idade, profissao) {
    super();
  }

  render() {
    console.log("profissional");
  }
}

const jessica = new Profissional("asdad", 223, "casdasd");
jessica.saudacao();
