import { createGlobalStyle } from "styled-components";
import { device } from '../device';

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
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;

        @media ${device.tablet} {
            padding: 0 0 0 270px; 
        }
    }

    a {
        display: block;
        text-decoration: none;
    }

    ul, ol {
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        height: auto;
    }

    ul {
        list-style: none;
    }

    .activeLink {
        background-color: #6fb958;
    }
    .activeButton {
        background-color: #6941c6;
    }
    .DayPicker {
        font-size: 1.6rem;
    }
`;

export default GlobalStyle;