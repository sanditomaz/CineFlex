import styled from "styled-components";

const StyledChooseSeat = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export default StyledChooseSeat;
