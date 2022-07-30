import styled from "styled-components";

const StyledSelected = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 17px;
`;
export default StyledSelected;
