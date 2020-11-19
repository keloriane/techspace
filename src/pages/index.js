import React from "react"
import "./../style.css";
import { Header } from "./../components/Header/index.js";
import {createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import Bus from "../components/Bus";
import Mobile from "../components/Mobile";
import Dcc from "./../components/Dcc/Dcc";
import Team from "./../components/Team/Team";
import Techspace from "../components/Techspace"
import Contact from "./../components/Contact"
import MyFont from './../assets/Jaapokki-Regular.otf';


export default function Home() {

  const theme = {
    blue: '#0E2B3E',
    azure: '#64B4E7'
  };




  const GlobalWrapper = styled.main `
  @font-face {
    font-family: "Japoky";
    src: url('${MyFont}');
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;800&display=swap');

  section {
    margin-top: 30vh;
  }
  h2 {
    font-family: "Japoky" , sans-serif;
    font-weight: 100;
  }

p, h3, h4 {
  font-family: "Inter" , sans-serif;
}
`


  return (
    <ThemeProvider theme={theme}>
      <GlobalWrapper>
      <Header />
      <Mobile />
      <Bus />
      <Dcc />
      <Team />
      <Techspace />
      <Contact />

      </GlobalWrapper>
    </ThemeProvider>
  )
}
