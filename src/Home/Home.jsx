import Footer from './Footer';
import { useState } from 'react';

/* props
 * é um objeto
 * é recebido através de um componente por parâmetro
 * é passado como "atributo" de um componente customizado
 * é público (é visto de fora pra dentro)
 * imutável
 */

/* state
 * é um objeto (ou qualquer outra coisa)
 * mutável (depois da renderização)
 * é privado
 */

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
      {texto && (
        <div></div>
      )}
    </div>
  );
}

export default Home;
