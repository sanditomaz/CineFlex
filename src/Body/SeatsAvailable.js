import StyledAvailableSeats from "../Styles/StyledAvailableSeats";
import StyledSelected from "../Styles/StyledSelected";

export default function SeatsAvailable() {
  const borderColor = "#1AAE9E";

  return (
    <StyledAvailableSeats>
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
    </StyledAvailableSeats>
  );
}
