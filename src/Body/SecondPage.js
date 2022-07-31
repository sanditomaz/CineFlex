import StyledTitle from "../Styles/StyledTitle";
import DateContainer from "../Styles/DateContainer";
import Page2Footer from "../Footer/Page2Footer";
import StyledBody from "../Styles/StyledBody";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SecondPage() {
  const { idFilme } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((res) => {
      setItems(res.data);
    });
  }, []);

  if (items === null) {
    return <img src="https://bit.ly/3cVOjK1" alt="Loading" />;
  }
  console.log(items);
  return (
    <>
      <StyledBody>
        <StyledTitle>
          <h1>Selecione o Horário</h1>
        </StyledTitle>
        <DateContainer>
          {items.days.map((item, index) => (
            <div key={item.id}>
              <h2>
                {item.weekday} - {item.date}
              </h2>
              <div>
                {item.showtimes.map((subitem, index) => (
                  <Link to={`/assentos/${subitem.id}`} key={subitem.id}>
                    <div key={index}>{subitem.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </DateContainer>
      </StyledBody>
      <Page2Footer title={items.title} url={items.posterURL} />
    </>
  );
}
