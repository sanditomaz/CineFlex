import styled from "styled-components";

const Styled2Footer = styled.div`
  min-width: 375px;
  width: 100vw;
  height: 117px;
  background-color: #dfe6ed;
  border-top: 1px inset #dfe6ed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  gap: 14px;
  position: fixed;
  bottom: 0;
  left: 0;

  div {
    width: 64px;
    height: 89px;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 2px #dfe6ed;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 48px;
      height: 72px;
    }
  }
  h1 {
    min-width: 169px;
    width: 100%;
    font-size: 26px;
    font-weight: 400;
    color: #293845;
  }
`;

export default Styled2Footer;
