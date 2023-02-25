import React from 'react';
import styled from 'styled-components';
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 90px;
    background-color: #2B2C2C;
    color: #7D8792;
    box-shadow: 0 0 20px 3px;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    z-index: 2;
    

    .logo{
        padding: 15px 0;
    }
`
const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
            SAMARA FERREIRA
            </div>
            <Burger />            
        </Nav>

    )
}

export default Navbar;