import React from "react";
import { Button } from "../components";

class ExercicioUmClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citacao: "",
      editandoCitacao: "",
      erro: false,
    };
  }

  handleInputChange = (evento) => {
    this.setState({
      erro: false,
      editandoCitacao: evento.target.value,
    });
  };

  atualizarCitacao = () => {
    if (this.state.editandoCitacao) {
      this.setState({
        citacao: this.state.editandoCitacao,
      });
    } else {
      this.setState({
        erro: true,
      });
    }
  };

  handleKeyDown = (evento) => {
    if (evento.key === "Enter") {
      this.atualizarCitacao();
    }
  };

  render() {
    const { citacao, erro } = this.state;
    return (
      <>
        <div>
          <blockquote>{citacao}</blockquote>
        </div>

        <div>
          <input
            className={`input ${erro ? "input_erro" : ""}`}
            type="text"
            placeholder="Insira sua citação"
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            defaultValue={this.props.valorInicial ?? ""}
          />
          <Button
            type="primary"
            onClick={this.atualizarCitacao}
            texto="Inserir citação"
          />
        </div>
      </>
    );
  }
}

export default ExercicioUmClasse;
