import styled from "styled-components";

const StyledAvailableSeats = styled.section`
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
`;

export default StyledAvailableSeats;
