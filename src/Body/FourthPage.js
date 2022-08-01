import StyledLastPage from "../Styles/StyledLastPage";
import StyledBody from "../Styles/StyledBody";
import Success from "./Sucess";
import FinalButton from "./FinalButton";
import { useLocation } from "react-router-dom";

export default function FourthPage() {
  const location = useLocation();
  console.log(location);
  console.log(location.state.cpf);

  return (
    <StyledBody>
      <>
        <Success />
        <StyledLastPage>
          <div>
            <h2>Filme e Sessão</h2>
            <h3>{location.state.title}</h3>
            <h3>
              {location.state.day} {location.state.time}
            </h3>
          </div>
        </StyledLastPage>

        <StyledLastPage>
          <div>
            <h2>Ingressos</h2>
            {location.state.place.map((item, index) => (
              <h3 key={index}>Assento {item}</h3>
            ))}
          </div>
        </StyledLastPage>

        <StyledLastPage>
          <div>
            <h2>Comprador</h2>
            <h3>Nome: {location.state.nome}</h3>
            <h3>CPF: {location.state.cpf}</h3>
          </div>
        </StyledLastPage>
      </>
      <FinalButton />
    </StyledBody>
  );
}
