import './Button.css';

// type: "primary" | "secondary"

function Button(props) {
  const { type, text } = props;

  return (
    <button className={`btn btn-${type}`}>{text}</button>
  )
}

export default Button;
