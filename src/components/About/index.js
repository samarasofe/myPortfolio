import React from 'react';
import { AboutContainer, ContentAbout, ImgProfile, TextAbout     } from './styles';
import Profile from '../../assets/img/imgProfile.jpeg'

// import { Container } from './styles';

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
                <p>Front-end developer with experience in React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI and consumption of REST APIs.
                     Passionate about developing reusable components. She also has experience in projects managed by Agile Methodologies.
                </p>
                </TextAbout>
                
                </ContentAbout>
            </AboutContainer>
        </>
    )
}

