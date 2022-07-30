import StyledTitle from "../Styles/StyledTitle";
import StyledBody from "../Styles/StyledBody";
import SeatsContainer from "../Styles/SeatsContainer";
import StyledChooseSeat from "../Styles/StyledChooseSeat";
import StyledSelected from "../Styles/StyledSelected";
import Registration from "./Registration";
import Page3Footer from "../Footer/Page3Footer";

export default function ThirdPage() {
  const color = "#c3cfd9";
  const borderColor = "#1AAE9E";

  return (
    <StyledBody>
      <StyledTitle>
        <h1>Selecione o(s) assento(s)</h1>
      </StyledTitle>
      <SeatsContainer>
        <div>
          <StyledChooseSeat color={color} borderColor="#808F9D">
            <h3>01</h3>
          </StyledChooseSeat>

          <StyledChooseSeat color={color} borderColor="#808F9D">
            <h3>02</h3>
          </StyledChooseSeat>

          <StyledChooseSeat color={color} borderColor="#808F9D">
            <h3>03</h3>
          </StyledChooseSeat>
        </div>
        <section>
          <div>
            <StyledSelected color="#8dd7cf" borderColor={borderColor} />
            <h4>Selecionado</h4>
          </div>

          <div>
            <StyledSelected color="#C3CFD9" borderColor="#7B8B99" />
            <h4>Disponível</h4>
          </div>

          <div>
            <StyledSelected color="#FBE192" borderColor="#F7C52B" />
            <h4>Indisponível</h4>
          </div>
        </section>
      </SeatsContainer>

      <Registration />
      <Page3Footer />
    </StyledBody>
  );
}
