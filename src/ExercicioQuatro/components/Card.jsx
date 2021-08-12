import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Card(props) {
  const {
    data,
    icone,
    temperatura: { max, min },
  } = props;

  const [destaque, setDestaque] = useState(false);

  const alternarDestaque = () => {
    setDestaque(!destaque);
  };

  return (
    <div>
      {props.count}
      <div className={`card ${destaque ? "destaque" : ""}`}>
        <h3>{data}</h3>
        <FontAwesomeIcon icon={icone} size={"6x"} />
        <div className="card__temperatura">
          <p>
            <FontAwesomeIcon icon={faArrowUp} transform={{ rotate: 45 }} />{" "}
            {max}°C
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowDown} transform={{ rotate: 45 }} />{" "}
            {min}°C
          </p>
        </div>
      </div>

      <button className="destaque__btn" onClick={alternarDestaque}>
        Destacar card
      </button>
    </div>
  );
}

export default Card;
