import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #ffffff;
  gap: 30px;

  div {
    width: 145px;
    height: 209px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 1px solid transparent;
    padding: 10px;
    box-shadow: 0px 2px 4px 2px lightgray;
  }

  img {
    width: 129px;
    height: 193px;
  }
`;

export default StyledContainer;
