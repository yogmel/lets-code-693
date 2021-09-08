import "./GiphyGenerator.css";
import Button from "./../../components/Button/Button";
import { useEffect, useState } from 'react';

function GiphyGenerator() {
  const [gif, setGif] = useState({});

  const fetchData = () => {
    const numAleatorio = Math.floor(Math.random() * 20);
  
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=ozM1JvU4nnl3eHRJT0iwMs2KnKlJZACS&limit=20")
      .then(data => data.json())
      .then(data => {
        setGif({
          url: data.data[numAleatorio].images.original.url,
          title: data.data[numAleatorio].title
        })
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="giphy-container">
      <h1>Seu humor hoje:</h1>
      <div className="image-container">
        <img src={gif.url} alt={gif.title} />
      </div>
      <div className="button-container">
        <Button type="primary" texto="Gerar novo humor" onClick={fetchData} />
      </div>
      <div className="input-container"></div>
    </div>
  )
}

export default GiphyGenerator;