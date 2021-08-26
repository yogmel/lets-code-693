import { useEffect, useState } from "react";
import "./Pokecard.css";

function Pokecard(props) {
  const { url } = props;

  const [pokemonData, setPokemonData] = useState({});

  const fetchPokemonData = () => {
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        setPokemonData({
          img: response.sprites.other.dream_world.front_default,
          id: response.id,
          name: response.name,
          type: response.types[0].type.name,
        });
      });
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div className="card">
      <img src={pokemonData.img} alt={pokemonData.name} />
      <p>
        {pokemonData.id}. {pokemonData.name}
      </p>
      <p>{pokemonData.type}</p>
    </div>
  );
}

export default Pokecard;
