import styled from "styled-components";
import { mediaQuery } from "../theme";

const Application = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  color: white;
  width: 100%;
  height: 100%;
  margin: 8px;
  display: flex;
  height:  100vh; 
  width:  100vw;
  margin:  0 0; 
  display:  flex; 
  align-items:  flex-start; 
  justify-content:  flex-start; 
  background:  #f3f2f2; 
  ${mediaQuery.desktop} {
    flex-direction: column;
  }

  ${mediaQuery.smMobile} {
    flex-direction: row;
  }

  ${mediaQuery.mobile} {
    flex-direction: row;
  }

    h4 {
      font-size:  24px; 
      font-weight:  600; 
      color:  #000; 
      opacity:  .85; 
    }
    label {
      font-size:  12.5px; 
      color:  #000;
      opacity:  .8;
      font-weight:  400; 
    }
`;

export { Application };
