import React from 'react';
import styled from 'styled-components';
import podcastImage from "./../../assets/images/podcast-image.png";


const Mobile = () => {
    const MobileWrapper = styled.section`
    
    width: 85%;
    margin: 20% auto;
.title-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    .title-container {
        h2 {
            font-size: 105px;
            text-transform: uppercase;
            
              font-family: "Japoky" , sans-serif;
            color: #0E2B3E;
            .bordered {
              font-family: "Japoky" , sans-serif;
                color: white;
                -webkit-text-stroke: 1px rgb(13, 43, 62);
            }

        }
    }
    .subtitle{
        align-self: end;
        text-transform:uppercase;
        font-weight: 800;
        
        h3{
            font-style: normal;
            font-size: 2.5vw;
            line-height: 110%;
            color: #0E2B3E;
          
           
        }
    }
}
.text-container {
    margin-top: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    font-family: "Inter" , sans-serif;
    font-style: normal;
    font-weight: 1;
    font-size: 25.98px;
    line-height: 119.4%;
    ul {
        list-style: disc;
    }
/* or 31px */
.description-step {
    ul {
        list-style: disc;
    }
}


color: #0E2B3E;
.bolder{
    font-weight: 800;
}
    
}
.podcast-image-container {

  width: 80%;
  object-fit: cover;
  margin: 10vh auto;
  display:flex;
  justify-content: center;
  img {
    width: 100%;
    
  }
  
  
  
}

    
    @media (max-width: 960px) {
      .title-wrapper {
        grid-template-columns: 1fr;
        .title-container {
        h2 {
          font-size: 80px;
        }
        
        }
      .subtitle {
        h3 {
          font-size: 30px;
        }
      }
      }
      .text-container {
      
        grid-template-columns: 1fr;
      }
    }
    
    
    `
    return (
        <MobileWrapper className="sensibilisation">
            <div className="title-wrapper">
                <div className="title-container">
                    <h2>Une<br /> Mission <br/> <span className="bordered">global</span></h2>
                </div>
                <div className="subtitle">
                    <h3>L'insertion socio-professionnel <br/> 100% dédiée au métiers du <br/> digital & l'émancipation digital<br />  des citoyens.</h3>



                </div>
            </div>
            <div className="text-container">
                <div className="description">
                <span className="bolder">Nos équipes viennent à vous dans l'objectif de :</span>
                <br/>  <br/> 
                    <ul>
                        <li>
                        <p> 
                    Donner un accès à des ressources informatiques : ordinateurs, tablettes, logiciels élémentaires,
                    avec connexion internet mais aussi des utilitaires divers lors d'ateliers.
</p>
                        </li>
                    </ul>
                   
                </div>
                <div className="description-step">
                    <ul>
                        <li>
                            Des sessions de sensibilisation sur la cybersécurité et la bonne utilisation d'internet</li>
                        <li>
                            Conscientisation sur le respect de la vie privée.

                        </li>
                        <li>
                            Partager des informations autour de thèmes dédiés aux tic ( métiers, Iobjetc ocnnectées, etc.)
                            Apport en matériel et co-création d'évènements de sensibilisation et d'apprentissages des TICS
                        </li>
                    </ul>
                </div>
            </div>
          <div className="podcast-image-container">
            <img src={podcastImage} alt="" />
          </div>
        </MobileWrapper>
    )
}

export default Mobile;

