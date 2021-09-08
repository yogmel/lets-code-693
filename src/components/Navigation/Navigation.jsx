import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [nome] = useState("Bruno");
  const [cpf] = useState("123.456.678.00");

  return (
    <nav className="navigation-menu">
      <NavLink className="link" activeClassName="selected-link" exact to="/">
        Home
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to="/exercicio-um/aa"
      >
        Exercicio Um
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to={`/exercicio-dois/${nome}/${cpf}`}
      >
        Exercicio Dois
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to="/exercicio-tres?minInicial=2&maxInicial=10"
      >
        Exercicio Três
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to="/exercicio-quatro"
      >
        Exercicio Quatro
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to="/exercicio-cinco"
      >
        Exercicio Cinco
      </NavLink>
      <NavLink className="link" activeClassName="selected-link" to="/pokedex">
        Pokedex
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to="/lista-de-tarefas"
      >
        Lista de Tarefas
      </NavLink>
      <NavLink
        className="link"
        activeClassName="selected-link"
        to="/giphy"
      >
        Giphy
      </NavLink>
    </nav>
  );
}

export default Navigation;
