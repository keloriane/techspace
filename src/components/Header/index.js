import React,  {useEffect} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HeaderHero from "./../../assets/images/header-team.png"
import heroimg from "./../../assets/images/heroimg.png"
import Nav from "./Nav.js"
import Text from "../Text"
import gsap from "gsap"
import { motion } from "framer-motion"

export const Header = () => {

  useEffect(() => {

  })

  const HeaderTag = styled.div`
            width: 100vw;
        
            background-color: #0E2B3E;
            color: white;
            .hero-header {
              .header-wrapper {
                height: 100vh;
                display: grid;
                width: 90%;
                margin: 0 auto;
                grid-template-columns: 3fr 4fr ;
                .text-header-container {
                  display: grid;
                 
                  justify-content: center;
                  align-items: center;
                  .info-wrapper {
                      width: 100%;
                      max-width: 90%;
                  }
                  .title-container {
                  position: relative;
                  height: 350px;
                  
                  width: 90%;
                  margin: 0 auto;
                  h1 {
                      display:flex;
                      position: absolute;
                    span{
                      font-weight: 700;
                      color: white;
                      font-size: 6vw;
                      z-index: 1;
                      font-family: "Japoky" , sans-serif;
                    
                    }
                      &.bordered {
                        -webkit-text-stroke: .5px white;
                         font-size: calc(39px + 6 * ((100vw - 320px) / 680));
                        color: transparent;
                        
                       font-family: "Japoky" , sans-serif;
                       font-weight: 100;
                        }
                   
                    }
                  }
                  .text-wrapper {
                    font-family: "Inter" , sans-serif;
                    font-style: normal;
                    font-weight: 300;
                    font-size: calc(16px + 6 * ((100vw - 1000px) / 680));
                    line-height: 164.6%;
                    /* or 33px */
                    width: 600px;
                    margin: auto;
                    letter-spacing: 0.03em;
                    
                    color: #FFFFFF;

                  }
                  .call-to-action {
                  .circle-button {
                    text-decoration: none;
                    position: relative;
                    display: inline-flex;
                    height: 90px;
                    width: auto;
                    align-items: center;
                    .bgnone{
                    background: transparent;
                    }
                    
                  &:hover {
                    .button-circle svg .path {
                      opacity: 1;
                      stroke-dashoffset: 0;
                    }
                    
                    .button-arrow {
                      opacity: 1;
                      right: -5px;
                    }
                  }
  
  .button-text {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "inter", sans-serif;
    font-weight: 100;
    background-color: #0e2b3e;
    padding: 10px 20px;
    z-index: 100;
  }
  
  .button-arrow {
    position: absolute;
    top: 41%;
    right: 0px;
    z-index: 100;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.6s;
  }
  
  .button-circle {
    position: absolute;
    right: -30px;
    top: 0;
    
    svg {
      transform: rotate(160deg);
      
      .path {
        stroke-width: 3;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        transition: stroke-dashoffset 0.75s ease-in-out;
      }
    } 
  }
}
                  
                  }
                }
                .image-header-container {
                // position: relative;
                // background-image: url(${HeaderHero});
                // width: 50vw;
                // background-size: cover;
                display:flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                picture {
                width: 100%;
                img {
                  max-width: 800px;
                  width: 100%;
                  
                }
                }
                
                }
                .social-media {
                display: flex;
                position: absolute;
                right: 20px;
                height: 90%;
                  ul {
                    list-style: none;
                    color: white;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                  
                    
                  li {
                      transform: rotate(90deg);
                      height: 70px;
                      a{
                        text-decoration:none;
                      font-family: 'Inter', sans-serif;
                        color: white;
                        font-size: 20px;
                        &:hover {
                          color: #84C3E6;
                        }
                      }
                  }
                  }
                }
              }
            }
            
     


@media(min-width: 1260px) {
  .hero-header {
    .header-wrapper {
      .text-header-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        
     
        
      }
    }
  }
 
}


@media (max-width: 1080px) {

  .hero-header {
    .header-wrapper {
      grid-template-columns: 1fr;
      .text-header-container {
        .title-container {
 
              height: 180px;
          
        h1 {
            position: relative;
            font-size: 70px;
            &.bordered {
              font-size: 30px;
            }
          } 
        }
      }
      
      //.image-header-container {
      //  display: flex;
      //  justify-content: center;
      //  img {
      //    width: 79%;
      //    position: relative;
      //  }
      //  picture {
      //    display: flex;
      //  }
      //}
    }
  }
      picture {
        display: none;
      }
}
    
    @media(max-width:1040px){
  
    
      .inner-text {
          margin: 0 auto;
    width: 100%;
    max-width: 495px;
    font-size: 21px;
      }
    }
    
    .hero-header .header-wrapper .text-header-container .title-container h1 span {
    font-size: 6vw;
    }
    .hero-header .header-wrapper .text-header-container .title-container h1.bordered {
      font-size: 44px;
    }
    
    
    
    @media(max-width: 960px) {
     .hero-header {
    .header-wrapper {
      grid-template-columns: 1fr;
      .text-header-container {
        .title-container {
 
              height: 180px;
          
        h1 {
            position: relative;
            font-size: 40px;
            span {
              font-size: 40px;
            }
            &.bordered {
              font-size: 30px;
            }
          } 
        }
      }
      .image-header-container {
        display:none;
        
      
      
      }
    }
  }
    }
    .word {
      position: relative;
      display: flex;
      margin: 3px;
      
    }
    
    .title {
      top: 0;
    }
    .subtitle {
    bottom: 0;
    }
    `

  useEffect(() => {
      gsap.from(".word" , { y:"100%", opacity: 0, duration:.4, stagger: .2 })
  })



  const homeAnimation = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {

        duration: 1
      }
    },
  }

  const containerImg = {
    initial:{
      scaleX:1,


    },
    enter:{
      scaleX:0,
      transition: {
        duration:.2,

        type: "tween"
      }
    }
  }
  const imageAnimation= {
    initial: {
      scale: 1.4
    },
    enter:{
      scale: 1,
      transition: {
        duration:2,
        ease:[.215,.61,.355,1],



      }

    }

  }





  return (
    <HeaderTag>
      <header className="hero-header">
        <div className="header-wrapper">
          <div className="text-header-container">
            <div className="title-container">
              <h1 className={"title"}> <span className={"word"}>LE </span> <span className={"word"}> TECHSPACE</span> </h1>
              <h1 className={"subtitle bordered"}> REUSSISSEZ VOTRE CHEMIN <br /> VERS LE DIGITAL
              </h1>
            </div>
            <div className="info-wrapper">
              {/*<div className="text-wrapper">*/}
              {/*  <p>Donner un accès à des ressources informatiques : ordinateurs, tablettes, logiciels élémentaires,*/}
              {/*    avec connexion internet mais aussi des utilitaires divers lors d'ateliers Initiation à l'usage de ces*/}
              {/*    outils.*/}
              {/*  </p>*/}
              {/*</div>*/}
              <Text
                as={'p'}
                color={"white"}
                maxWidthLg={'500px'}
                fontWeight={100}
                size={0.5}
                className={'inner-text'}>Donner un accès à des ressources informatiques : ordinateurs, tablettes, logiciels élémentaires,
                   avec connexion internet mais aussi des utilitaires divers lors d'ateliers Initiation à l'usage de ces
                   outils.
              </Text>

            </div>
            <div className="call-to-action">

              <a className="circle-button" href="#" title="">
                <span className="button-text">En savoir plus</span>
                <span className="button-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="18.527" height="11.873" viewBox="0 0 18.527 11.873"><g
                  transform="translate(-726.5 -424.779)"><line x2="16.717" transform="translate(727.25 430.715)"
                                                               fill="none"
                                                               stroke="#fff" stroke-linecap="round"
                                                               stroke-width="1.5" /><line
                  x2="4.876" y2="4.876" transform="translate(739.091 425.84)" fill="none" stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="1.5" /><line y1="4.876" x2="4.876" transform="translate(739.091 430.715)" fill="none"
                                             stroke="#fff" stroke-linecap="round" stroke-width="1.5" /></g></svg>
                </span>
                <span className="button-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90"
                     className={"bgnone"}>
                <g id="Ellipse_1" data-name="Ellipse 1">


                  <circle className="red" cx="43" cy="43" r="40" stroke="#fff" stroke-width="2" fill="none" />
                  <circle className="gray path" cx="43" cy="43" r="40" stroke="#84C3E6" stroke-width="2" fill="none" />
                </g>
              </svg>
              </span>
              </a>
            </div>

          </div>


          <div className="image-header-container">
            <picture>
              <source srcSet={HeaderHero} media="(min-width: 1300px)" />
              <source srcSet={heroimg} media="(min-width: 1200px)" />
              <motion.img srcSet={heroimg} alt="hello"
                          variants={imageAnimation}
                          initial={"initial"}
                          animate={"enter"}
              />
            </picture>
          </div>
          <div className="social-media">
            <ul>
              <li><a href="">Facebook</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Linkedin</a></li>

            </ul>
          </div>
        </div>
      </header>
    </HeaderTag>
  )
}
