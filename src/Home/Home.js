import Footer from './Footer';
import { useState } from 'react';

function Home() {
  const [texto, setTexto] = useState('');

  const atualizarTexto = (evento) => {
    setTexto(evento.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escreva seu texto"
        onChange={atualizarTexto} />
      <p className="citacao">{texto}</p>
      <Footer paginaAtual='Contato' />
    </div>
  );
}

export default Home;
