import { useState, useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./../components";
import ExercicioCinco from "./ExercicioCinco/ExercicioCinco";
import ExercicioDois from "./ExercicioDois/ExercicioDois";
import ExercicioQuatro from "./ExercicioQuatro/ExercicioQuatro";
import ExercicioTres from "./ExercicioTres/ExercicioTres";
import ExercicioUm from "./ExercicioUm/ExercicioUm";
import ListaDeTarefas from "./ListaDeTarefas/ListaDeTarefas";
import Pokedex from "./Pokedex/Pokedex";
import GiphyGenerator from "./GiphyGenerator/GiphyGenerator";
import { ContadorContext } from "../context/ContadorContext";

function Routes() {
  const [contador, setContador] = useState('AAAAAAAAAA');
  
  const contadorDois = useContext(ContadorContext);

  return (
    <ContadorContext.Provider value={contador}>
      <h2>context: {contadorDois}</h2>
      <h2>state: {contador}</h2>
      <Navigation />
      <div className="routes">
        <Switch>
          <Route exact path="/">
            <p>Home</p>
          </Route>
          <Route path="/exercicio-um/:id">
            <ExercicioUm />
          </Route>
          <Route path="/exercicio-um">
            <ExercicioUm />
          </Route>
          <Route path="/exercicio-dois/:nomeInicial?/:cpfInicial?">
            <ExercicioDois />
          </Route>
          <Route path="/exercicio-tres">
            <ExercicioTres />
          </Route>
          <Route path="/exercicio-quatro">
            <ExercicioQuatro />
          </Route>
          <Route path="/exercicio-cinco">
            <ExercicioCinco />
          </Route>
          <Route path="/pokedex/:limit?">
            <Pokedex />
          </Route>
          <Route path="/lista-de-tarefas">
            <ListaDeTarefas />
          </Route>
          <Route path="/giphy">
            <GiphyGenerator setContador={setContador} />
          </Route>
          <Route>
            <p>404 - Rota não encontrada</p>
          </Route>
        </Switch>
      </div>
    </ContadorContext.Provider>
  );
}

export default Routes;
