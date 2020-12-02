import React from "react"
import TechAbout from "../components/TechspaceAbout"
import Problematique from "../components/Problematique"
import Way from "./../components/Way"
import Layer from "../components/Layer"
import styled from "styled-components"
import MyFont from "../assets/Jaapokki-Regular.otf"
import {ThemeProvider } from 'styled-components'
export default function About () {

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
    <ThemeProvider theme={theme} >
    <GlobalWrapper>
      <TechAbout />
      <Problematique />
      <Layer />
      <Way />
    </GlobalWrapper>

    </ThemeProvider>
  )
}