import StyledLastPage from "../Styles/StyledLastPage";
import StyledBody from "../Styles/StyledBody";
import Success from "./Sucess";
import FinalButton from "./FinalButton";

export default function FourthPage() {
  return (
    <StyledBody>
      <>
        <Success />
        <StyledLastPage>
          <div>
            <h2>Filme e Sessão</h2>
            <h3>Punisher</h3>
            <h3>24/06/2022 15:00</h3>
          </div>
        </StyledLastPage>

        <StyledLastPage>
          <div>
            <h2>Ingressos</h2>
            <h3>Assento 15</h3>
            <h3>Assento 16</h3>
          </div>
        </StyledLastPage>

        <StyledLastPage>
          <div>
            <h2>Comprador</h2>
            <h3>Nome: João</h3>
            <h3>CPF: 123.456.789-10</h3>
          </div>
        </StyledLastPage>
      </>
      <FinalButton />
    </StyledBody>
  );
}
