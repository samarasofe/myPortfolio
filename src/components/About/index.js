import React from 'react';
import { AboutContainer, ContentAbout, ImgProfile, TextAbout     } from './styles';
import Profile from '../../assets/img/imgProfile.jpeg'


export default function About() {
    return (
        <>
            <AboutContainer>
                <ContentAbout>
                
                <ImgProfile>                
                <img src={Profile} alt='Foto perfil'></img>
                </ImgProfile>
                <TextAbout>
                <h2>About Me</h2>
                <p>"I'm a technology enthusiast and a good challenge inspires me!
                    My goal as a front-end developer is to ensure a more complete,
                    informative and pleasant experience in human-computer interactions.
                    I love traveling and getting to know new cultures. 
                    I like design, samba and magical realism books."
                </p>
                </TextAbout>
                
                </ContentAbout>
            </AboutContainer>
        </>
    )
}

