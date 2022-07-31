import StyledTitle from "../Styles/StyledTitle";
import StyledBody from "../Styles/StyledBody";
import SeatsContainer from "../Styles/SeatsContainer";
import StyledChooseSeat from "../Styles/StyledChooseSeat";
import Registration from "./Registration";
import Page3Footer from "../Footer/Page3Footer";
import SeatsAvailable from "./SeatsAvailable";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ThirdPage() {
  const [color, setColor] = useState("#c3cfd9");
  const [borderColor, setBorderColor] = useState("#808F9D");
  const { idSessao } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((res) => {
      setItems(res.data);
    });
  }, []);

  if (items === null) {
    return "Loading";
  }

  function selectSeat() {
    if (color === "#c3cfd9") {
      setColor("#8DD7CF");
      setBorderColor("#45BDB0");
    } else {
      setColor("#c3cfd9");
      setBorderColor("#808F9D");
    }
  }

  return (
    <StyledBody>
      <StyledTitle>
        <h1>Selecione o(s) assento(s)</h1>
      </StyledTitle>
      <SeatsContainer>
        <div>
          {items.seats.map((item, index) => {
            return item.isAvailable ? (
              <StyledChooseSeat
                onClick={selectSeat}
                key={index}
                color={color}
                borderColor={borderColor}
              >
                <h3>{item.name}</h3>
              </StyledChooseSeat>
            ) : (
              <StyledChooseSeat
                onClick={() => alert("Esse assento não está disponível")}
                key={index}
                color="#FBE192"
                borderColor="#F7C52B"
              >
                <h3>{item.name}</h3>
              </StyledChooseSeat>
            );
          })}
        </div>
        <SeatsAvailable />
      </SeatsContainer>

      <Registration />
      <Page3Footer
        url={items.movie.posterURL}
        title={items.movie.title}
        day={items.day.weekday}
        time={items.name}
      />
    </StyledBody>
  );
}
