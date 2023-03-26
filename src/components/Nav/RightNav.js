import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 10;
    cursor: pointer;

    li {
        padding: 18px 10px;
    }

    @media (max-width:768px) {
        flex-flow: column nowrap;
        background-color: #696969;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
    }
`;

const RightNav = ({ open }) => {  //add tag Link para scroll smoo
    return (
        <Ul open={open}>
            <li>
                <Link to='logo' smooth={true} offset={-200} duration={500}>Home</Link></li>

            <li>
                <Link to='about-id' smooth={true} offset={-200} duration={500}>About</Link></li>
            <li>
                <Link to='skills-id' smooth={true} offset={-200} duration={500}>Skills</Link></li>
            <li>
                <Link to='projects-id' smooth={true} offset={-200} duration={500}>Projects</Link></li>
            <li>                
                <Link to='github-id' smooth={true} offset={-200} duration={500}>GitHub</Link></li>

            <li>
            <Link to='contact-id' smooth={true} offset={-200} duration={500}>Contact</Link></li>
        </Ul>
    )
}

export default RightNav;