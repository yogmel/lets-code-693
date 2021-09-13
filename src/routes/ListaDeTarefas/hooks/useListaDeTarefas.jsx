import { useState } from 'react';

export function useListaDeTarefas() {
  const [editandoTarefa, setEditandoTarefa] = useState("");
  const [editandoCategoria, setEditandoCategoria] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [erro, setErro] = useState(false);

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

  return {
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
  }
};