import React from "react"
import styled from "styled-components"
import bustechspace from "./../../assets/images/bus-techspace.png"


const Bus = () => {
  const BusWrapper = styled.section`
       
        color: ${props => props.theme.blue};

        .bus-section-title {
              margin: 20px auto;
              width: 100%;
              max-width: 600px;
            h2 {
                font-size: 5vw;
                font-weight: 100;
                color: ${props => props.theme.blue};
                &.bordered {
                  -webkit-text-stroke: 1px ${props => props.theme.blue};
                  color: transparent;
                }
            }
        }
        .bus-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 95%;
          margin: 0 auto;
          align-self: center;
          grid-column-gap: 58px;
          
          .text-container { 
              display: flex;
              flex-direction: column;
              justify-content: center;
            .title-wrapper {
            max-width: 400px;
            width: 100%;
            padding-bottom: 20px;
            
            
              h2 {
                
                 font-style: normal;
                font-weight: 800;
                font-size: 36px;
                line-height: 175.02%;
                text-transform:uppercase;
                /* or 63px */


              color: #16232E;

              }
            }
            .text-wrapper {
              width: 100%;
              max-width: 700px;
              display: grid;
              grid-template-rows: 1fr 1fr;
              grid-row-gap: 58px;
              margin: 0 auto;
              p {
              font-family: "Inter" , sans-serif;
              font-style: normal;
              
              font-size: 20px;
              line-height: 175.02%;
              color: rgba(0, 0, 0, 0.8);
/* or 35px */


              }
            }
           }
           .image-container {
          text-align: center;
           img {
            width: 100%;
            max-width:700px;
           }
           }
        }
      
      @media (max-width: 960px) {
          .bus-section-title {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            
            h2 {
            font-size: 80px;
            }
          
          }
        .bus-wrapper {
          grid-template-columns: 1fr;
          width: 80%;
         
        }
        
      }
        

    
    `




  return (
    <BusWrapper className="bus" id={"bus"}>
      <div className="bus-section-title">
        <h2>AXE1:</h2>
        <h2 className={"bordered"}>LE BUS</h2>
      </div>
      <div className="bus-wrapper">
        <div className="image-container">
          <div className="image-layer">

          </div>
          <img src={bustechspace} alt="" />
        </div>
        <div className="text-container">
          <div className="title-wrapper">
            <h2>Notre Objectif</h2>

          </div>
          <div className="text-wrapper">
            <p>
              > Rendre les citoyens autonomes et confortables
              face aux nouvelles technologies, <br/>
              > Sensibiliser et vulgariser les sujets liées au NTICS, <br/>
              > Susciter des vocations / passions pour les Ntics, <br/>
              > Contribuer à lutter contre la fracture numérique. <br/>
            </p>
            <p>
              Combler le manque d'accès à l'information par la diffusion de masse, parce que les citoyens recherchant l'information ne savent pas comment faire ou par où commencer... Nous emmenons l'information à eux, via notre bus !

            </p>
          </div>
        </div>
      </div>
    </BusWrapper>
  )
}

export default Bus
