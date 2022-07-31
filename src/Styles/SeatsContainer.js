import styled from "styled-components";

const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #ffffff;

  div {
    max-width: 375px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;

    h3 {
      font-size: 11px;
      font-weight: 400;
      color: #000000;
    }
  }
`;

export default SeatsContainer;
