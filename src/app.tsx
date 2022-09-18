import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { F3Icon, GT3Icon, LOAIcon } from "./Components/base64";
import LoaSquare from "./Components/LoaSquare";
import Square from "./Components/Square";

const GlobalStyling = createGlobalStyle`
    html {
        margin: 0; 
        padding: 0;
    }    

    body {
        margin: 5px; 
        padding: 0;
        background-color: black;

        color: white;
        font-family: 'Roboto', sans-serif;
    }
`;

const Grid = styled.div`
  max-width: 920px;
  display: grid;
  grid-template-columns: repeat(12, 80px);
  grid-template-rows: repeat(6, 80px);
`;

function App() {
  return (
    <>
      <GlobalStyling />
      <Grid>
        <Square
          column={1}
          row={1}
          size={4}
          platform={"league"}
          icon={LOAIcon}
          url="https://limitofadhesion.com/"
        />
        <Square
          column={5}
          row={1}
          size={4}
          platform="youtube"
          url="https://youtube.com/limitofadhesion"
        />
        <Square
          column={1}
          row={5}
          size={3}
          platform="discord"
          label="Road"
          url="https://loa.social/discord"
        />
        <Square
          column={4}
          row={5}
          size={3}
          platform="discord"
          label="Oval"
          url="https://loa.social/oval-discord"
        />
        <Square
          column={7}
          row={5}
          size={1}
          platform="league"
          icon={F3Icon}
          url="http://ir-leaguemanager.com/manager/seasons/82011"
        />
        <Square
          column={8}
          row={5}
          size={1}
          platform="league"
          icon={GT3Icon}
          url="http://ir-leaguemanager.com/manager/seasons/80574"
        />
      </Grid>
    </>
  );
}

export default App;
