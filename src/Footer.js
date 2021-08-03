import "./Footer.css";

/* Componente:
  * é uma função (ou classe)
  * seu nome inicia com letra maiúscula
  * retorna (um único) JSX
  * pode receber props
*/

function Footer(props) {
  // const props = {
  // paginaAtual: "Home"
  // count: 0
  // }

  return (
    <footer className="footer">Copyright &copy; | {props.paginaAtual}</footer>
  );
}

export default Footer;
