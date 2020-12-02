import React, { useEffect } from "react"
import styled from "styled-components";
import bgimage from "./../../assets/images/bg-mobile.svg";
import podcastTeam from "./../../assets/images/podcast-image.png";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
/*gsap.registerPlugin(ScrollTrigger);*/

const Mobile = () => {





  const MobileWrapper = styled.section `
      
      
    .section-title-container {
      width: 40%;
      margin: 10vh auto;
      
      h2 {
        span {
        font-family: "Jaapokki" , sans-serif;
        font-style: normal;
        font-weight: normal;
        position: relative;
        font-size: 5vw;
        line-height: 110%;
        /* or 118px */
        text-transform:uppercase;
        color: #0E2B3E;
        
        }
        .bordered {
          font-family: "Jaapokki" , sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 5vw;
          line-height: 110%;
          -webkit-text-stroke: 1px #0E2B3E;
          color: white;
          text-indent: 100px;
        }
      }
    }
    .subtitle-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 60px;
      max-width: 1300px;
      width: 100%;
      margin: 5% auto;
      .left-gap {
        width: 100%;
        max-width: 435px;
        display: flex;
        justify-self: flex-end;
        h3 {
          font-family: "Jaapoky" , sans-serif;
          font-style: normal;
          font-weight: 800;
          font-size: 24px;
          line-height: 133.5%;
          text-align: right;
          text-transform: uppercase;
          color: #0E2B3E;
          
        }
      }
      .right-gap {
        width: 100%;
        max-width: 542px;
        
        p {
          font-family: "Inter" , sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 22.98px;
          line-height: 150%;
          /* or 34px */
          
          
          color: #0E2B3E;
        }
      }
    }
    .image-wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      
      img {
        width: 90%;
        margin: 0 auto;
      }
      
     .background {
      background-image:url(${bgimage});
      width: 960px;
      height: 550px;
      background-size: cover;
      position: absolute;
      z-index: -1;
     }
    }
    
    .text-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 60px;
      width: 100%;
      max-width: 1200px;
      margin: 5vh auto;
      p {
        font-family: "Inter" , sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22.98px;
        line-height: 150%;
        /* or 34px */
        color: #0E2B3E;
      }
      
    }
    
    @media (max-width: 1124px) {
      .subtitle-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
      .left-gap {
        width: 100%;
        max-width: 550px;
        justify-self: center;
      }
      }
      .text-wrapper {
       grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
      .left-gap {
        width: 100%;
        max-width: 550px;
        
      }
      .right-gap {
           width: 100%;
        max-width: 550px;
      }
      }
      
      .image-wrapper {
        .background {
          display: none; 
        }
        img {
          width: 100%;
          max-width: 550px;
        }
      }
    }
    
    
    
    

`


    const mobileTimeline = gsap.timeline({
      scrollTrigger: {
        id: "#mobile-section",
        trigger: "#mobile-section",
        start: "center",
        markers: true
      }
    });
  useEffect(()=> {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    mobileTimeline
      .from('.line', 1 , {
        y:"30%",
        stagger:.5,
        opacity: 0
      })

  },[])







   const [contentRef, inView] = useInView({
          triggerOnce: true
      })





  return (
    <MobileWrapper id={"mobile"} >
      <div id="mobile-section">

      <div className="section-title-container" id={"mobile-section-container"}>
        <h2



        >
          <span
            className={"line"}


          >
          Une mission

          </span>
          <br/>
          <span



            className="bordered line">
           global
        </span>
        </h2>
      </div>
      <div className="subtitle-container">
        <div className="left-gap">
          <h3>
            L'INSERTION SOCIO-PROFESSIONNEL
            100% DÉDIÉE AU MÉTIERS DU
            DIGITAL & L'ÉMANCIPATION DIGITAL
            DES CITOYENS.
          </h3>
        </div>
        <div className="right-gap">
          <p>
            Nos équipes viennent à vous dans l'objectif de :
            - Donner un accès à des ressources informatiques : ordinateurs, tablettes, logiciels élémentaires, avec connexion internet mais aussi des utilitaires divers lors d'ateliers.
          </p>
        </div>
      </div>
      <div className="image-wrapper">
        <div

          className="background">

        </div>
        <img

          src={podcastTeam} alt="" />
      </div>
      <div className="text-wrapper">
        <div className="left-gap">
          <p>
            • Des sessions de sensibilisation sur la cybersécurité et la bonne utilisation d'internet
            • Conscientisation sur le respect de la vie privée.
          </p>
        </div>
        <div className="right-gap">
          <p>
            • Partager des informations autour de thèmes dédiés aux tic ( métiers, Iobjetc ocnnectées, etc.) Apport en matériel et co-création d'évènements de sensibilisation et d'apprentissages des TICS
          </p>
        </div>
      </div>
      </div>
    </MobileWrapper>
  )
}
export default  Mobile;