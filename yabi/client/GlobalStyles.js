import { createGlobalStyle } from 'styled-components';
import 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';

const GlobalStyle = createGlobalStyle`
  body {
      font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-style: normal;
  }
`;

export default GlobalStyle;