import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function Card(props) {
  const [dadosCidade, setDadosCidade] = useState({});

  const fetchData = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cidade}&appid=a8868b8ed509c59de081619871a3a53e&units=metric`;

    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        const obj = {
          cidade: response.name,
          icone: response.weather[0].icon,
          clima: response.weather[0].description,
          temperatura: {
            min: response.main.temp_min,
            max: response.main.temp_max,
          },
        };
        setDadosCidade(obj);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { cidade, destaque, icone, clima, temperatura } = dadosCidade;

  return (
    <div>
      <div className={`card ${destaque ? "destaque" : ""}`}>
        <h3>{cidade}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${icone}@2x.png`}
          alt={clima}
        />
        <div className="card__temperatura">
          <p>
            <FontAwesomeIcon icon={faArrowUp} transform={{ rotate: 45 }} />{" "}
            {temperatura?.max}°C
          </p>
          <p>
            <FontAwesomeIcon icon={faArrowDown} transform={{ rotate: 45 }} />{" "}
            {temperatura?.min}°C
          </p>
        </div>
      </div>

      <button className="destaque__btn">Destacar card</button>
    </div>
  );
}

Card.defaultProps = {
  cidade: "fortaleza"
};

Card.propTypes = {
  cidade: PropTypes.string
};

export default Card;
