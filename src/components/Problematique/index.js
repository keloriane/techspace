import React from "react";
import techspaceimg from "./../../assets/images/debrief-techspace.png";
import styled from "styled-components"
import textlayer from "./../../assets/images/text-layer.svg"
import Text from "../Text"
const Problematique = () => {
  const ProblematiqueSection = styled.section `
      display: grid;
      grid-template-columns: 1fr 3fr;
      width: 60%;
      margin: 0 auto;
      grid-column-gap: 88px;
      position: relative;
      
      .image-container {
      
      }
      .text-container {
            display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 665px;
    width: 100%;
  
        .subtitle {
          h2 {
          font-size: 4vw;
          font-weight: 800;
          color: ${props => props.theme.blue};
          text-transform: uppercase;
          
          }
        }
        .inner-text {
          display:grid;  
          grid-template-rows: 1fr 1fr;
          grid-row-gap: 25px;
          margin-top: 50px;
        .text-wrapper {
          p {
            font-family: "Inter" , sans-serif;
            font-style: normal;
            font-weight: 1;
            font-size: 22px;
            line-height: 175.02%;
            /* or 39px */
          }
        }
        }
      }
        .text-layer {
          width: 100%;
          max-width: 940px;
          height: 310px;
          display: flex;
          align-items: center;
          background-image: url(${textlayer});
          background-size: cover;
          position: absolute;
          bottom: -5%;
          .layer {
            width: 100%;
            max-width: 863px;
            ul {
              li {
              
              font-family: "Inter", sans-serif;
              font-style: normal;
              font-weight: 1;
              font-size: 27px;
              line-height: 150.8%;
              color: #FFFFFF;
            
              }
            }
          }
        }
      
      @media(max-width: 960px) {
        grid-template-columns: 1fr;
        .image-container {
          display: flex;
          justify-content: center;
          img {
          height: 600px;
          } 
        }
        .text-layer {
          position: inherit;
          width: 100%;
          max-width:580px;
          margin: 0 auto;
          .layer {
            max-width: 410px;
            margin: 0 auto;
            ul {
              li {
                font-size: 18px;
              }
            }
          }
        }
      }
      @media(max-width: 1260px){
        width: inherit;
      }

`

  return (
    <ProblematiqueSection className="problematique">
      <div className="image-container">
        <img src={techspaceimg} alt="" />
      </div>
      <div className="text-container">
        <div className="subtitle">
          <h2>La Problematique</h2>
        </div>
        <div className="inner-text">
          <div className="text-wrapper">
          <p>
            Alors que le monde se digitalise... La maîtrise de l’'outil informatique reste problématique pour
            toute une partie de la population, y compris à un niveau élémentaire. Posséder un ordinateur
            avec un accès à Internet n'est pas une garantie d'EXPLOITER ces ressources..
          </p>


          </div>
        <div className="text-wrapper">
          <p>
            86% des belges ont accès à un ordinateur et Internet, 40% d'entres eux sont incapables
            d’'utiliser Tax-on-web et 50% ne parviennent pas à remplir un formulaire en ligne
          </p>
        </div>

        </div>

      </div>
      <div className="text-layer">
        <div className="layer">
          <ul>
            <li>-  <strong>1 belge sur 5</strong>  est incapable d’envoyer ou de recevoir des e-mails
            </li>
            <li>- <strong>1 belge sur 7</strong>  est incapable de surfer sur Internet
            </li>
            <li>- <strong>1 belge sur 4</strong>  est incapable de consulter les sites d'actualités
            </li>
          </ul>
        </div>
      </div>
    </ProblematiqueSection>
  )
}
export default Problematique;