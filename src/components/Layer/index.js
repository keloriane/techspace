import React from "react"
import styled from "styled-components"
import layer from "./../../assets/images/layer.svg"


const Layer = () =>{
  const LayerWrapper = styled.section `
    .layer {
      width: 100%;
      max-width: 80%;
      background-image: url(${layer});
      margin: 20vw auto;
      height: 360px;
      background-size: cover;
      display: flex;
      align-items: center;
      
      .layer-text {
        width: 80%;
        margin: 0 auto;
        &:first-line{
          text-indent: 10%;
        }
        h3 {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 800;
          font-size: 41px;
          line-height: 150.8%;
          color: #FFFFFF;
          

        }
      }
    }
    `
  return (
  <LayerWrapper>
  <div className="layer">
      <div className="layer-text">
        <h3>
          IL EXISTE ENCORE UN DÉCALAGE ENTRE
        </h3>
        <h3>
          LE CONTENU DES FORMATIONS ET LES
        </h3>
        <h3>
          COMPÉTENCES SPÉCIFIQUES RECHERCHÉES
        </h3>
        <h3>
          PAR LES ENTREPRISES
        </h3>
      </div>
  </div>
  </LayerWrapper>
  )
}
export default Layer