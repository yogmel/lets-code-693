import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Tarefa.css";

function Tarefa({ index, tarefa, atualizarFinalizada, removerTarefa }) {
  return (
    <>
      <input
        type="checkbox"
        checked={tarefa.finalizado}
        onChange={atualizarFinalizada}
      />
      <label className={tarefa.finalizado ? "finalizado" : ""} >{tarefa.nome}</label>
      <label className="categoria">{tarefa.categoria}</label>
      <FontAwesomeIcon icon={faTrash} transform={{ rotate: 0 }} onClick={() => removerTarefa(index)} />
    </>
  )
}

export default Tarefa;
