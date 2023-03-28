import React from 'react';
import { BannerContainer } from './styles';
import CvSamara from "../Banner/CVSamara.pdf"


export default function Banner() {

    return (
        <BannerContainer>
            <div>
                <h2>Hi, I'm</h2>
                <h1>Front End Developer</h1>
                <button><a href={CvSamara} download="CV-Samara">Download CV</a></button>
            </div>
        </BannerContainer>
    )
}
