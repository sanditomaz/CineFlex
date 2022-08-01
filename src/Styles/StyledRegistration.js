import styled from "styled-components";

const StyledRegistration = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  gap: 15px;
  padding-bottom: 40px;

  div {
    font-size: 18px;
    font-weight: 400;
    color: #293845;
    padding-bottom: 3px;
  }

  input {
    min-width: 327px;
    height: 51px;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    color: #afafaf;
    padding-left: 10px;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
  }

  button {
    min-width: 225px;
    height: 42px;
    background-color: #e8833a;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    border: none;
  }
`;

export default StyledRegistration;
