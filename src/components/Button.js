import './Button.css';

// type: "primary" | "secondary"

function Button(props) {
  const { type, texto, onClick } = props;

  return (
    <button className={`btn btn-${type}`} onClick={onClick}>{texto}</button>
  )
}

export default Button;
