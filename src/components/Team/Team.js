import React,{useState} from "react"
import styled from "styled-components"
import Ornella from "./../../assets/images/Ornella.png";
import bgslide from "./../../assets/images/rect-slider.svg"
import Carousel, { consts } from 'react-elastic-carousel'




const Team = () => {



  const teams = [
    {
      id: 1,
      name: "Simba",
      firstName: "Ornella",
      job: "Founder",
      description: "Rendre les citoyens autonomes et confortables\n" +
        "face aux nouvelles technologies\n" +
        "Sensibiliser et \n" +
        "vulgariser. ",
      picture: require("./../../assets/images/Ornella.png")
    }, {
      id: 1,
      name: "Gerbino",
      firstName: "Pamela",
      job: "Founder",
      description: "Rendre les citoyens autonomes et confortables\n" +
        "face aux nouvelles technologies\n" +
        "Sensibiliser et \n" +
        "vulgariser. ",
      picture: require("./../../assets/images/Ornella.png")
    }, {
      id: 1,
      name: "blabla",
      firstName: "Fatima",
      job: "Founder",
      description:
        "Rendre les citoyens autonomes et confortables\n" +
        "face aux nouvelles technologies\n" +
        "Sensibiliser et \n" +
        "vulgariser. ",
      picture: require("./../../assets/images/Ornella.png")
    }, {
      id: 1,
      name: "Simba",
      firstName: "Ornella",
      job: "Founder",
      description: "Rendre les citoyens autonomes et confortables\n" +
        "face aux nouvelles technologies\n" +
        "Sensibiliser et \n" +
        "vulgariser. ",
      picture: require("./../../assets/images/Ornella.png")
    }, {
      id: 1,
      name: "Simba",
      firstName: "Ornella",
      job: "Founder",
      description: "Rendre les citoyens autonomes et confortables\n" +
        "face aux nouvelles technologies\n" +
        "Sensibiliser et \n" +
        "vulgariser. ",
      picture: require("./../../assets/images/Ornella.png")
    }

  ]





  const TeamWrapper = styled.section`

.wrapper {
  .section-title {
  
    h2{
        font-size: 4vw;
        font-family: "Japoky" , sans-serif;
        text-align: center; 
        text-transform:uppercase;   
        font-weight: 100; 
        color: ${props => props.theme.blue};   
        .bordered {
        -webkit-text-stroke: 1px ${props => props.theme.blue};
        font-weight: 100; 
          color: transparent;
         font-family: "Japoky" , sans-serif;
         
        }
      }
    }
    
  } 
  
  .slider-container {
    display: flex;
    .carousel {
      .slide {
        display: flex;
        .text-slider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h3 {
            font-size: 100px;
            font-weight: 100;
            font-family: "Japoky" , sans-serif;
            
          }
          h4 {
            font-size: 80px;
            font-weight: 100;
            color: transparent;
            -webkit-text-stroke:  1px ${props => props.theme.blue};
            font-family: "Japoky" , sans-serif;
          }
          .job-description {
            background-image:url(${bgslide});
            height: 270px;
            background-size: cover;
            p{
              font-family: "Inter" , sans-serif;
              font-style: italic;
              font-weight: bold;
              font-size: 28px;
              line-height: 34px;
              max-width: 350px;
              width: 100%;
              color: #0E2B3E;
            }
          }
        }
        
      }
    }
  }
  
  @media(max-width: 1360px) {

    .wrapper {
    
      .section-title {
        h2 {
          font-size: 80px;
          font-family: "Japoky" , sans-serif;
          
        }
      }
    }
    .slider-container {
      .carousel {
        .slide {
          .text-slider {
            h3 {
              font-size: 40px;
            }
            h4 {
              font-size: 30px;
            }
            .job-description {
              p {
              font-size: 16px;
              width: 150px;
              }
            }
          }
          .image-slider {
            img {
              width: 100%;
              max-width: 265px;
            }
          }
        }
      }
    }
  }

`

  const myArrow = ({ type, onClick, isEdge }) =>{

    const pointer = type === consts.PREV ? '👈' : '👉'
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }


const breakPoints = [


    { width: 840, itemsToShow:1 },
    { width: 1010, itemsToShow:2 },
    { width: 1360, itemsToShow: 2 },
    { width: 1750, itemsToShow: 3 },
  ]




  return (
    <TeamWrapper>
      <div className="wrapper">
      <div className="section-title">
        <h2>Le team <br/>
        <span className={"bordered"}>Techspace</span> </h2>
      </div>
      <div className="slider-container">
        <Carousel   pagination={false} breakPoints={breakPoints} className={"carousel"} itemPadding={[10, 50]} >
          {
            teams.map((team)=> (
              <div className={"slide"}>
                <div className="text-slider">
                  <h3>{team.firstName}</h3>
                  <h4>{team.job}</h4>
                  <div className="job-description">
                    <p>
                      {
                        team.description
                      }
                    </p>

                  </div>
                </div>
                <div className="image-slider">
              <img src={team.picture} alt=""/>

                </div>
                </div>
            ))
          }
        </Carousel>
      </div>

      </div>
    </TeamWrapper>
  )
}
export default Team