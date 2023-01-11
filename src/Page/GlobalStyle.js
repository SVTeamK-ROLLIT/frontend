import { createGlobalStyle } from 'styled-components';
import sketchbook from '../Image/sketchbookLogin.png';

const GlobalStyle = createGlobalStyle`
  body .rolling {
    margin: 0;
    padding: 0;
    background: url(${sketchbook});
    background-repeat: no-repeat;
    background-size: 100rem 60rem;
    background-position: center;
  }
`;

export default GlobalStyle;
