import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html {
        font-size: 62.5%;
    }
    
    body {
        padding: 0 0 0 270px;
        margin: 0;
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
    }

    a {
        display: block;
        text-decoration: none;
    }

    .activeLink {
        background-color: #6fb958;
    }
    .activeButton {
        background-color: #6941c6;
    }
`;

export default GlobalStyle;