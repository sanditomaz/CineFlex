import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    body{box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        cursor: default;
    }
`;

export default GlobalStyle;
