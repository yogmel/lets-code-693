import { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import ExercicioCinco from "../routes/ExercicioCinco/ExercicioCinco";
import ExercicioDois from "../routes/ExercicioDois/ExercicioDois";
import ExercicioQuatro from "../routes/ExercicioQuatro/ExercicioQuatro";
import ExercicioTres from "../routes/ExercicioTres/ExercicioTres";
import ExercicioUm from "../routes/ExercicioUm/ExercicioUm";
import Pokedex from "../routes/Pokedex/Pokedex";
import "./Home.css";

function Home() {
  const [nome] = useState("Bruno")
  const [cpf] = useState("123.456.678.00")

  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="navigation-menu">
          <NavLink className="link" activeClassName="selected-link" exact to="/">Home</NavLink>
          <NavLink className="link" activeClassName="selected-link" to="/exercicio-um">Exercicio Um</NavLink>
          <NavLink className="link" activeClassName="selected-link" to={`/exercicio-dois/${nome}/${cpf}`}>Exercicio Dois</NavLink>
          <NavLink className="link" activeClassName="selected-link" to="/exercicio-tres?minInicial=2&maxInicial=10">Exercicio Três</NavLink>
          <NavLink className="link" activeClassName="selected-link" to="/exercicio-quatro">Exercicio Quatro</NavLink>
          <NavLink className="link" activeClassName="selected-link" to="/exercicio-cinco">Exercicio Cinco</NavLink>
          <NavLink className="link" activeClassName="selected-link" to="/pokedex">Pokedex</NavLink>
        </nav>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <p>HOME</p>
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
            <Route>
              <p>404 - Rota não encontrada</p>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Home