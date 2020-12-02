import React from 'react'
import { Link } from 'react-scroll';
import styled from "styled-components";
import logo from "./../../assets/images/logo-techspace.svg"


const Nav = () => {
    const NavLink = styled.nav `
        position: absolute;
        top: 0;
        display: flex;
        width: 90%;
        justify-content: center;
        margin: 0 auto;
        height: 80px;
        align-items: center;
        padding: 30px;
        .logo {
        
        }
        ul {
            display: flex;
            height: 80px;
            align-items: center;
            justify-content: space-around;
            width: 80%;
            margin: 0 auto;
            li {
                    text-transform:uppercase;
                   
              a{
               font-size: 20px;
                    font-weight: 800;
                    font-family: "Inter" , sans-serif;
                    color: white;
                    cursor: pointer;
              }

            }
        }
    
    `
    return (
        <NavLink>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
                <ul>
                    <li>
                        <Link
                          activeClass="active"
                          to="mobile"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >About</Link>
                    </li>
                    <li>
                        <Link
                          activeClass="active"
                          to="bus"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >Le bus</Link>
                    </li>
                    <li>
                        <Link
                          activeClass="active"
                          to="dcc"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >Digital carreer center </Link>
                    </li>
                    <li>
                        <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >Contact</Link>
                    </li>
                </ul>
            </NavLink>
    )
}

export default Nav
