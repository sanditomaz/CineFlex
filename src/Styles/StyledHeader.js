import styled from "styled-components";

const StyledHeader = styled.div`
  min-width: 375px;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    color: #e8833a;
    font-size: 34px;
    font-weight: 400;
  }
`;

export default StyledHeader;
