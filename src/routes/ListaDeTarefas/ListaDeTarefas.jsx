import "./ListaDeTarefas.css";
import Tarefa from "./Tarefa";
import { useListaDeTarefas } from './hooks/useListaDeTarefas';

function ListaDeTarefas() {
  const {
    tarefas,
    erro,
    editandoTarefa,
    editandoCategoria,
    adicionarTarefa,
    atualizarEditandoTarefa,
    atualizarEditandoCategoria,
    atualizarFinalizada,
    removerTarefa,
    removerTodas,
    checarTodos
  } = useListaDeTarefas();

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
