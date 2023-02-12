import React from 'react';
import { AboutContainer, ImgProfile } from './styles';
import Profile from '../../assets/img/imgProfile.jpeg'

// import { Container } from './styles';

export default function About() {
    return (
        <>
            <AboutContainer>
                <ImgProfile>

                    <h2>About Me</h2>
                    <p>Percebemos, cada vez mais, que a contínua expansão de nossa atividade facilita a criação do orçamento setorial.</p>
                    <img src={Profile} alt='Foto perfil'></img>

                </ImgProfile>
            </AboutContainer>
        </>
    )
}

