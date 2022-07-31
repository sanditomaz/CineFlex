import styled from "styled-components";

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #ffffff;
  padding-left: 20px;

  div {
    margin-bottom: 10px;
    h2 {
      min-width: 241px;
      width: 100%;
      height: 35px;
      font-size: 20px;
      font-weight: 400;
      color: #293845;
      display: flex;
      align-items: center;
      padding-bottom: 22px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 8px;
      cursor: pointer;
      a {
        text-decoration: none;
      }

      div {
        width: 83px;
        height: 43px;
        background-color: #e8833a;
        border-radius: 3px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default DateContainer;
