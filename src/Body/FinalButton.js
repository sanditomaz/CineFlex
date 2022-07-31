import StyledFinalButton from "../Styles/StyledFinalButton";
import { Link } from "react-router-dom";

export default function FinalButton() {
  return (
    <Link to={`/`}>
      <StyledFinalButton>
        <button type="submit">Voltar para Home</button>
      </StyledFinalButton>
    </Link>
  );
}
