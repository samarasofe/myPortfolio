import React from 'react';
import Menu from '../Menu';
import Banner from './Banner';
import { HeaderContainer, Container, ContentTitle, Title, SubTitle } from './styles';

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <Container>
                    <ContentTitle>
                        <Title>
                            SAMARA FERREIRA
                        </Title>
                        <SubTitle>
                            Personal Portfolio
                        </SubTitle>
                    </ContentTitle>
                    < Menu />
                </Container>
            </HeaderContainer>
            < Banner />
        </>

    )
}



