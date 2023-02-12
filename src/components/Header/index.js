import React from 'react';
import Menu from '../Menu';
import Banner from './Banner';
import { HeaderContainer, Container } from './styles';

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <Container>
                    <div>
                        SAMARA
                    </div>
                    < Menu />
                </Container>
            </HeaderContainer>
            < Banner/>
        </>

    )
}



