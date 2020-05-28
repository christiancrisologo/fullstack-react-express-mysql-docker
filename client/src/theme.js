import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#003366",
  secondary: "#0033ff",
  bgColor: "#003366",
  secondaryBgColor: "rgba(255, 255, 255, 0.98)",
  textPrimaryColor: "rgba(0, 0, 0, 0.9)",
  textSecondaryColor: "rgba(0, 0, 0, 0.5)",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.bgColor};
    padding: 0;
    margin: 0;
  }
`;

export const mediaSize = {
  mobileS: "319px",
  mobileM: "481px",
  mobileL: "641px",
  tablet: "961px",
  desktop: "1025px",
  desktopL: "1281px",
};

export const mediaQuery = {
  smMobile: ` @media only screen and (min-width: ${mediaSize.mobileS} )  and  (max-width: ${mediaSize.mobileM} )`,
  mobile: ` @media only screen and (min-width: ${mediaSize.mobileM} ) and  (max-width: ${mediaSize.tablet} ) `,
  desktop: ` @media only screen and (min-width: ${mediaSize.tablet} ) `,
};

export default GlobalStyle;
