import StyledTitle from "../Styles/StyledTitle";
import StyledContainer from "../Styles/StyledContainer";
import StyledBody from "../Styles/StyledBody";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingImg from "../Styles/LoadingImg";

export default function FirstPage() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((res) => {
      setItems(res.data);
    });
  }, []);

  if (items === null) {
    return (
      <LoadingImg>
        <img src="https://bit.ly/3S8He93" alt="Loading" />
      </LoadingImg>
    );
  }

  return (
    <StyledBody>
      <StyledTitle>
        <h1>Selecione o Filme</h1>
      </StyledTitle>
      <StyledContainer>
        {items.map((item) => (
          <Link to={`/sessoes/${item.id}`} key={item.id}>
            <div>
              <img src={item.posterURL} alt={item.title} id={item.id} />
            </div>
          </Link>
        ))}
      </StyledContainer>
    </StyledBody>
  );
}
