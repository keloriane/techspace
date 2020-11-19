import React from "react"
import styled from "styled-components"

const Techspace = () => {

  const TechspaceWrapper = styled.section`
  display: grid;
  background-color: ${props => props.theme.blue};
  grid-template-columns: 1fr 1fr;
  color: white;
  margin-top: 10vw;
  .title-container {
    align-self: center;
    h2 {
      font-size: 5vw;
      
      -webkit-text-stroke: 1px white;
      text-transform:uppercase;
      color: transparent;
      font-family: "Japoky", sans-serif;
      span {
        color: white;
      
      font-family: "Japoky", sans-serif;
      font-weight: 100;
      }
          
    }
  }
  .card-container {
      display: grid;
      grid-template-columns: 0fr 0fr;
      grid-template-rows: 1fr 1fr;
      grid-column-gap: 25px;
      grid-row-gap: 25px;
      
      
    .card{  
      background: #143D57;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      width: 306px;
      height: 340px;
      padding: 35px;
      header {
        h3 {
          font-size: 22px;
          
        }
      }
      .article {
        p {
          font-family: "Inter" ,  sans-serif;
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 150%;
          /* or 30px */


          color: #FFFFFF;
        }
      }
    }
  }
  
  @media(max-width: 1100px) {
    grid-template-columns: 1fr;
    .title-container {
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
      padding: 30px;
      
      h2 {
      font-size: 80px;
      
      }
    }
    .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
        max-width: 306px;
      width: 100%;
    }
    
    }
  }
  
`
  return (
    <TechspaceWrapper className={"techspace also"}>
      <div className="title-container">
          <h2> <span>Techspace</span> <br/> c'est <br/> aussi</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <header>
            <h3>Du coaching & mentorat</h3>
          </header>
          <div className="article">
            <p>Avec une équipe d'experts
              travaillant dans le secteur
              et formés pour vous
              accompagner à chacune
              des étapes de votre
              parcours.</p>
          </div>
        </div>
        <div className="card">
          <header>
            <h3>Un seul espace</h3>
          </header>
          <div className="article">
            <p>Nous avons été à
              votre place, et suivi le
              même parcours
              d'orientation et de
              formation.</p>
          </div>
        </div>
        <div className="card">
          <header>
            <h3>Du conseil & orientation</h3>
          </header>
          <div className="article">
            <p>ciblés et entièrement
              dédiés aux métiers des
              nouvelles technologies
              et du digital.</p>
          </div>
        </div>
        <div className="card">
          <header>
            <h3>l'experience</h3>
          </header>
          <div className="article">
            <p>Avec une équipe d'experts travaillant dans le secteur
              et formés pour vous accompagner à chacune
              des étapes de votre parcours.
            </p>
          </div>
        </div>


      </div>
    </TechspaceWrapper>
  )
}
export default Techspace