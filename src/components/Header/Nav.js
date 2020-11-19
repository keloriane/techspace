import React from 'react'
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "./../../assets/images/logo-techspace.svg"

const Nav = () => {
    const NavLink = styled.nav `
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
                    font-size: 20px;
                    font-weight: 800;
              a{
              
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
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Le bus</Link>
                    </li>
                    <li>
                        <Link>Digital carreer center</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </NavLink>
    )
}

export default Nav
