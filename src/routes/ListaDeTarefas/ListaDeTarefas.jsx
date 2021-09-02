import { useState } from "react";
import "./ListaDeTarefas.css";
import Tarefa from "./Tarefa";

function ListaDeTarefas() {
  const [editandoTarefa, setEditandoTarefa] = useState("");
  const [editandoCategoria, setEditandoCategoria] = useState("");
  const [tarefas, setTarefas] = useState([])
  const [erro, setErro] = useState(false)

  const atualizarEditandoTarefa = (evento) => {
    setEditandoTarefa(evento.target.value);
  };

  const atualizarEditandoCategoria = (evento) => {
    setEditandoCategoria(evento.target.value);
  };

  const atualizarFinalizada = (index) => (evento) => {
    const tarefasAtualizadas = [
      ...tarefas.slice(0, index),
      { ...tarefas[index], finalizado: evento.target.checked },
      ...tarefas.slice(index + 1)
    ]

    setTarefas(tarefasAtualizadas);
  }

  const adicionarTarefa = () => {
    if (!editandoTarefa || !editandoCategoria) {
      setErro(true)
      return
    }

    setErro(false)
    setTarefas([...tarefas, {
      nome: editandoTarefa,
      categoria: editandoCategoria,
      finalizado: false
    }]);
    setEditandoTarefa("");
    setEditandoCategoria("");
  };

  const removerTarefa = (index) => {
    const tarefasFiltradas = tarefas.filter((tarefa, currentIndex) => currentIndex !== index)
    setTarefas(tarefasFiltradas)
  }

  const removerTodas = () => {
    setTarefas([])
  }

  const checarTodos = () => {
    const todosFinalizados = tarefas.every(tarefa => tarefa.finalizado === true)

    if (todosFinalizados) {
      const tarefasDeschecadas = tarefas.map(tarefa => ({
        ...tarefa,
        finalizado: false
      }))
      setTarefas(tarefasDeschecadas)
      return
    }

    const tarefasChecadas = tarefas.map(tarefa => ({
      ...tarefa,
      finalizado: true
    }))
    setTarefas(tarefasChecadas)
  }

  return (
    <section className="lista-de-tarefas">
      <div className="tarefas-input">
        <div>
          <input
            type="text"
            placeholder="Digite uma tarefa"
            name="tarefa"
            value={editandoTarefa}
            onChange={atualizarEditandoTarefa}
          />
          <input
            type="text"
            placeholder="Digite uma categoria"
            name="categoria"
            value={editandoCategoria}
            onChange={atualizarEditandoCategoria}
          />
        </div>
        <button onClick={adicionarTarefa}>Adicionar tarefa</button>
      </div>

      {erro && <p className="validacao">Preencha os dois campos!</p>}

      <div className="tarefas-container">
        {tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            index={index}
            tarefa={tarefa}
            atualizarFinalizada={atualizarFinalizada(index)}
            removerTarefa={removerTarefa}
          />
        ))}
      </div>

      <div className="botoes">
        <button onClick={checarTodos}>
          Checar todos
        </button>
        <button onClick={removerTodas}>
          Remover todos
        </button>
      </div>
    </section>
  )
}

export default ListaDeTarefas;
