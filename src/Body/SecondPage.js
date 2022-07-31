import StyledTitle from "../Styles/StyledTitle";
import DateContainer from "../Styles/DateContainer";
import Page2Footer from "../Footer/Page2Footer";
import StyledBody from "../Styles/StyledBody";
import { useParams } from "react-router-dom";

export default function SecondPage() {
  const { idFilme } = useParams();
  console.log(idFilme);
  return (
    <>
      <StyledBody>
        <StyledTitle>
          <h1>Selecione o Horário</h1>
        </StyledTitle>
        <DateContainer>
          <div>
            <h2>Quinta-feira - 24/06/2021</h2>
            <div>
              <div>15:00</div>
              <div>03:00</div>
            </div>
          </div>

          <div>
            <h2>Quinta-feira - 24/06/2021</h2>
            <div>
              <div>15:00</div>
              <div>03:00</div>
            </div>
          </div>

          <div>
            <h2>Quinta-feira - 24/06/2021</h2>
            <div>
              <div>15:00</div>
              <div>03:00</div>
            </div>
          </div>

          <div>
            <h2>Quinta-feiraaaaaaaaaaa - 24/06/2021</h2>
            <div>
              <div>15:00</div>
              <div>03:00</div>
            </div>
          </div>
        </DateContainer>
      </StyledBody>
      <Page2Footer idFilme={idFilme} />
    </>
  );
}
