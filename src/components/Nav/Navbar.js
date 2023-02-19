import React from 'react';
import Burger from './Burger'
import { Nav } from './styles';


export const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                Samara Soares
            </div>
            <Burger />            
        </Nav>

    )
}

export default Navbar;