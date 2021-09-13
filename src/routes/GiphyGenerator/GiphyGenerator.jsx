import "./GiphyGenerator.css";
import Button from "./../../components/Button/Button";
import { useEffect, useState } from 'react';

function GiphyGenerator(props) {
  const [gif, setGif] = useState({});
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState(false);

  const { setContador } = props;

  const fetchData = () => {
    setLoading(true);
    const numAleatorio = Math.floor(Math.random() * 20);
  
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=ozM1JvU4nnl3eHRJT0iwMs2KnKlJZACS&limit=20")
      .then(data => data.json())
      .then(data => {
        setGif({
          url: data.data[numAleatorio].images.original.url,
          title: data.data[numAleatorio].title
        })
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const gerarPorPalavraChave = (e) => {
    e.preventDefault();
    
    const numAleatorio = Math.floor(Math.random() * 20);

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=ozM1JvU4nnl3eHRJT0iwMs2KnKlJZACS&limit=20&q=${pesquisa}`)
      .then(data => data.json())
      .then(response => {
        console.log('response', response);
        setGif({
          url: response.data[numAleatorio].images.original.url,
          title: response.data[numAleatorio].title
        })
      });
  }

  const atualizarPesquisa = (e) => {
    setPesquisa(e.target.value);
  }

  return (
    <div className="giphy-container">
      {loading && <p>loading...</p>}
      <h1>Seu humor hoje:</h1>
      <div className="image-container">
        <img src={gif.url} alt={gif.title} />
      </div>
      <div className="button-container">
        <Button type="primary" texto="Gerar novo humor" onClick={fetchData} />
      </div>
      <form className="input-container" onSubmit={gerarPorPalavraChave}>
        <input type="text" onChange={atualizarPesquisa} />
        <button>Gerar por palavra-chave</button>
      </form>
      <button onClick={() => {console.log('asda'); setContador(2)}}>MUDAR CONTEXTO</button>
    </div>
  )
}

export default GiphyGenerator;
