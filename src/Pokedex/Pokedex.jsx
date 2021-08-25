import Pokecard from "./Pokecard";
import { useEffect, useState } from "react";
import "./Pokedex.css";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10";
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        setPokemons(response.results);
      });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="container">
      {pokemons.map((pokemon) => (
        <Pokecard key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default Pokedex;
