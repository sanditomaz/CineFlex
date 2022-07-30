import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    body{box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
