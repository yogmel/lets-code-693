import "./Footer.css";

/* Componente:
  * é uma função (ou classe)
  * seu nome inicia com letra maiúscula
  * retorna (um único) JSX
  * pode receber uma props, que é um objeto, com uma ou mais propriedades
*/

function Footer(props) {
  return (
    <footer className="footer">Copyright &copy; | {props.paginaAtual}</footer>
  );
}

export default Footer;
