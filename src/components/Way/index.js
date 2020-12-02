import React from "react";
import styled from "styled-components";



const Way = () => {
  const WayWrapper = styled.section `

  background-color: ${props => props.theme.blue};
  color: white;  
  .way-container {
    .title-wrapper {
      h2 {
        font-size: 5vw;
        font-family: "Japoky" , sans-serif;
        text-transform:uppercase;
        font-weight: 800;
      }
    }
    
    .way-card-container {
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    .way-card {
      width: 275px;
      height: 275px;
      border: 3px solid #64B4E7;
      box-sizing: border-box;
      margin: 25px;
      position: relative;
      .card-side {
          position: absolute;
          left: -58px;
          transform: rotate(90deg);
          transform-origin: center;
          top: 100px;
          display: flex;
          justify-content: space-evenly;
          height: 0%;
          div{
            margin: 5px;
            }  
      }
          .card-img {
            
          }
        }
    }
  
  }
    .dcc-container {
      
      .title-wrapper {
        .title {
          h2 {
            text-transform:uppercase;
            font-size: 5vw;
            
          }
        }
        .subtitle {
        h3 {
        font-family: "Japoki" , sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 41px;
        line-height: 150.8%;
        color: #FFFFFF;
        
        }

        }
      }
      .text-container {
        background {
          background-color: black;
          p {
            font-family: Inter , sans-serif;
            color: white;
          }
        }
      }
    }

    `
  return (
      <WayWrapper>
        <div className="way-container">
          <div className="title-wrapper">
            <h2>Votre Chemin <br/>
              Vers le digital
            </h2>

          </div>

          <div className="way-card-container">
            <div className="way-card">
              <div className="card-side">
                <div className="number">
                  01
                </div>
                <div className="subtitle">
                  <h4>Formation Specifique</h4>
                </div>
              </div>
              <div className="card-img">
                <img src="" alt="" />
              </div>

            </div>
            <div className="way-card">
              <div className="card-side">
                <div className="number">
                  01
                </div>
                <div className="subtitle">
                  <h4>Formation Specifique</h4>
                </div>
              </div>
              <div className="card-img">
                <img src="" alt="" />
              </div>

            </div>
            <div className="way-card">
              <div className="card-side">
                <div className="number">
                  01
                </div>
                <div className="subtitle">
                  <h4>Formation Specifique</h4>
                </div>
              </div>
              <div className="card-img">
                <img src="" alt="" />
              </div>

            </div>
            <div className="way-card">
              <div className="card-side">
                <div className="number">
                  01
                </div>
                <div className="subtitle">
                  <h4>Formation Specifique</h4>
                </div>
              </div>
              <div className="card-img">
                <img src="" alt="" />
              </div>

            </div>
            <div className="way-card">
              <div className="card-side">
                <div className="number">
                  01
                </div>
                <div className="subtitle">
                  <h4>Formation Specifique</h4>
                </div>
              </div>
              <div className="card-img">
                <img src="" alt="" />
              </div>

            </div>

          </div>

        </div>
        <div className="dcc-container">
          <div className="title-wrapper">
            <div className="title">
            <h2>Le digital </h2>
            <h2>career center</h2>

            </div>
            <div className="subtitle">
              <h3>
                Notre centre d'orientation et <br/> d'accompagnement vers <br/> les metiers du digital
              </h3>
            </div>
          </div>
          <div className="text-container">
            <div className="background">

            </div>
            <div className="inner-text">
              <p>• Faire des entretiens et analyses afin de vous orienter au mieux et vous aider à construire
                un parcours de formations adapté à votre situation et projet personnel,
                • De se rencontrer en ONE-to-ONE pour un coaching et mentorat personnalisés et adaptés
                à vos objectifs métiers (employés, demandeurs d'emploi, entrepreneurs)
                • Vous fournir ou vous orienter vers des formations adaptées aux besoins et la réalité du
                marché
                • Vous mettre en relation avec les entreprises en demandes et d'assurer un suivi même
                après l'embauche.</p>
            </div>
          </div>
        </div>
      </WayWrapper>
  )
}

export default Way;
