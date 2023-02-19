import React from 'react';
import { Ul } from './styles';

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>About</li>
            <li>GitHub</li>
            <li>Contato</li>
        </Ul>
    )
}

export default RightNav;