import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html {
        font-size: 62.5%;
        padding: 0;
        margin: 0;
    }
    
    body {
        padding-left: 220px;
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
        background-color: #6fb958;
    }
`;

export default GlobalStyle;