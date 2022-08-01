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
  const { idSessao } = useParams();
  const [items, setItems] = useState(null);
  const [place, setPlace] = useState([]);
  const [idSeat, setIdSeat] = useState([]);

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

  return (
    <StyledBody>
      <StyledTitle>
        <h1>Selecione o(s) assento(s)</h1>
      </StyledTitle>
      <SeatsContainer>
        <div>
          {items.seats.map((item, index) => (
            <RenderSeats
              key={index}
              seats={item.isAvailable}
              name={item.name}
              idAssento={item.id}
              emptyIdArray={idSeat}
              setIdSeat={setIdSeat}
              place={place}
              setPlace={setPlace}
            />
          ))}
        </div>
        <SeatsAvailable />
      </SeatsContainer>

      <Registration
        place={place}
        title={items.movie.title}
        day={items.day.date}
        time={items.name}
        idSeat={idSeat}
      />
      <Page3Footer
        url={items.movie.posterURL}
        title={items.movie.title}
        day={items.day.weekday}
        time={items.name}
      />
    </StyledBody>
  );
}

function RenderSeats({
  seats,
  name,
  place,
  setPlace,
  idAssento,
  emptyIdArray,
  setIdSeat,
}) {
  const [color, setColor] = useState("#c3cfd9");
  const [borderColor, setBorderColor] = useState("#808F9D");

  function selectSeat() {
    if (color === "#c3cfd9") {
      setColor("#8DD7CF");
      setBorderColor("#45BDB0");
      const newPlaces = [...place, name];
      setPlace(newPlaces);
      const newidSeats = [...emptyIdArray, idAssento];
      setIdSeat(newidSeats);
    } else {
      setColor("#c3cfd9");
      setBorderColor("#808F9D");
      const filtered = place.filter((value) => value !== name);
      setPlace(filtered);
      const filtId = emptyIdArray.filter((value) => value !== idAssento);
      setIdSeat(filtId);
    }
  }

  return (
    <>
      {seats ? (
        <StyledChooseSeat
          onClick={selectSeat}
          color={color}
          borderColor={borderColor}
        >
          <h3>{name}</h3>
        </StyledChooseSeat>
      ) : (
        <StyledChooseSeat
          onClick={() => alert("Esse assento não está disponível")}
          color="#FBE192"
          borderColor="#F7C52B"
        >
          <h3>{name}</h3>
        </StyledChooseSeat>
      )}
    </>
  );
}
