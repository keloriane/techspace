import React from "react"
import styled from "styled-components"
import bgdcc from "./../../assets/images/backgroundDcc.svg"
import bgChallenge from "./../../assets/images/challengeBackground.svg"



const Dcc = () => {

  const DccContainer = styled.section `
    height: 885px;
     padding-top: 10vw;
     padding-bottom: 10vw;
 
     margin: 0 auto;
     width: 100%;
     
    .section-title {
        width: 100%;
        max-width: 83vw;
        margin: 0 auto;
      h2 {
        font-size: 5vw;
        font-style: normal;
        font-weight: 800;
        line-height: 110%;
        color: ${props => props.theme.blue};
        &.bordered {
          color: transparent;
          -webkit-text-stroke: 1px ${props => props.theme.blue};
          
        }
        &.second {
          text-indent: 3vw;
        }
      }
      
    }
    .inner-text {
      width: 100%;
      grid-column-start: 3;
      
    }
   .text-container {
    background-image: url(${bgdcc});
    height: 505px;
    color: white;
    background-size: cover;

    max-width: 85%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    .bordered-title {
      .title-wrapper {
        margin-top: 30px;
        
      h2{
        font-size: 5vw;
        font-weight: 100;
        color: transparent;
        text-transform:uppercase;
        -webkit-text-stroke: 1px white;
         &.fourth {
          text-indent: 3vw;
        }
        
        
        }
      }
      }
      .inner-text {
         width: 100%;
         max-width: 504px;
        .text-wrapper {
          p {
              font-family: "Inter", sans-serif;
              font-style: normal;
              font-weight: 1;
              font-size: 29px;
              line-height: 150%;
              color: #FEFEFE;
              padding: 30px;
          }
        }
      }
      .challenge-card {
        position: relative;
        height: 280px;
        .card-wrapper {
        background-image: url(${bgChallenge});
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 280px;
        
        position: absolute;
            left: -33%;
    bottom: 5%;

          width: 100%;
          max-width: 535px;
              padding-left: 37px;
    padding-right: 16px;
}
          h3 {
            font-size: 29px;
            text-transform:uppercase;
            font-weight: 800;
          }
          p {
            font-size: 26px;
            font-weight: lighter;
          }
        }
        
      }
    }
    .inner-text {
      align-self: center;
      .text-wrapper {
        width: 100%;
        max-width: 505px;
        p {
          font-size: 38px;
        }
      } 
    }
    
    
    @media(max-width: 1260px) {
   height: inherit;
    .section-title {
        h2 {
          font-size: 80px;
        }
    }
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 880px;
      .bordered-title {
      .title-wrapper {
        h2 {
          font-size: 80px;
        }
      }
        .challenge-card {
          position: inherit;
          height: inherit;
          .card-wrapper{
            left: 0;
            bottom: -4%;
          }
        }
      }
      .inner-text {
         height: 411px;
         display: flex;
        .text-wrapper {
        display: flex;
        align-items: center;
          p {
            font-size: 30px;
          }
        }
      }
    }
  
  @media (max-width: 777px) {
  
    .text-container {
      .bordered-title {
        .title-wrapper {
        
        margin-top: 30px;
        }
        
      }
    }
   
    .text-container {
    .challenge-card {
    .card-wrapper {
      width: 320px;
    }
    
    }
    
    
    }
  } 

`

  return (
    <DccContainer className={"dcc"} id={"dcc"}>
      <div className="section-title">
        <h2 className={"first"}>
          AXE 2:
        </h2>
        <h2 className={"second"}>
          LE DIGITAL
        </h2 >
      </div>
      <div className="text-container">
        <div className="bordered-title">
          <div className="title-wrapper">
          <h2 className={"third"}>Career</h2> <br/>
          <h2 className={"fourth"}>Center</h2>
          </div>
          <div className="challenge-card">
            <div className="card-wrapper">
              <h3>Le challenge ?</h3>
              <p>
                Amener et accompagner les personnes vers les métiers du digital.
              </p>
            </div>
          </div>
        </div>
        <div className="inner-text">
        <div className="text-wrapper">
          <p>
            Accompagner les citoyens à chaque étape de leur transition professionnelle et les aider à atteindre leurs objectifs carrières dans le secteur du digital.
          </p>
        </div>

        </div>
      </div>

    </DccContainer>
  )
}
export default Dcc;