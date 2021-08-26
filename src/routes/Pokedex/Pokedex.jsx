import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex() {
  const { limit } = useParams()
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit || '10'}`;
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        setPokemons(response.results);
      });
  };

  useEffect(() => {
    fetchPokemons();
    return () => { console.log("Desligando Pokedex") }
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
