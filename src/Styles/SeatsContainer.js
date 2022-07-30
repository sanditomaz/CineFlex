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

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    gap: 30px;
    padding-top: 15px;
    flex-wrap: wrap;
    div {
      flex-direction: column;

      h4 {
        font-size: 13px;
        font-weight: 400;
        color: #4e5a65;
      }
    }
  }
`;

export default SeatsContainer;
