import React from "react"
import styled from "styled-components"
import formbg from "./../../assets/images/formbg.svg";


const Contact = () => {

  const ContactWrapper = styled.section`
    .contact-wrapper {
      .title-container {
        h2 {
          text-transform:uppercase;
          font-weight: 800;
          font-size: 7vw;
          color:${props => props.theme.blue};
          .bordered {
            -webkit-text-stroke: 1px ${props => props.theme.blue};
            color: transparent;
            text-indent: 2vw;
            margin-left: 200px;
            font-family: "Japoky" , sans-serif;
            font-weight: 100;
          }
          
        }
      }
      .form-container {
        background-image:url(${formbg});
        background-size: cover;
        justify-content: center;
        width: 95%;
        margin: 0 auto;
        padding: 25px;
        display: flex;
        align-items: center;
        height: 658px;
        form {
        max-width: 830px;
        margin: 0 auto;
        width: 100%;
        
          font-size: 29px;
          text-transform:uppercase;
          font-weight: 800;
          color: white;
          input, textarea {
            background:transparent;
            border: 1px solid white;
            padding-left: 5px;
            font-family: "Inter", sans-serif;
          }
          textarea {
            font-family: "Inter", sans-serif;
            width: 100%;
            height: 400px;
          }
          .form-control {
            display: flex;
            flex-direction: column;
            
          }
          .form-header {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            
        
          }
          .form-info {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          
        }
      }
    }
    
    @media (max-width: 800px) {
      .contact-wrapper {
        .form-container {
          height: 780px;
        form {
          text-align: center;
          textarea, input {
            width: 100%;
            max-width: 370px;
            margin: 0 auto;
          
          }
          .form-header{
            justify-content: center;
          }
          .form-info {
            justify-content: center;
          }
        }
        }
      }
    }
      
      
label {
font-family: "Inter" , sans-serif;
}
            

`

  return (
    <ContactWrapper className={"contact"}>
      <div className="contact-wrapper">
        <div className="title-container">
          <h2>
            Prendre <br /> <span className="bordered">
            Contact
          </span>
          </h2>
        </div>
        <div className="form-container">
          <form action="">
            <div className="form-header">
              <div className="name form-control" >
                <label htmlFor="name">Nom</label>
                <input type="text" />
              </div>
              <div className="lastname form-control">
                <label htmlFor="lastname">Prémon</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-info">
              <div className="mail form-control">
                <label htmlFor="mail">Adresse mail</label>
                <input type="mail" />
              </div>
              <div className="what form-control">
                <label htmlFor="but">Je souhaite</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-description form-control">
              <label htmlFor="">Description</label>
              <textarea name="description" id="description" ></textarea>
            </div>

          </form>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default Contact