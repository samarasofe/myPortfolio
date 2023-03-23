import React from 'react';
import { BannerContainer } from './styles';


export default function Banner() {
    return (
        <BannerContainer>
            <div>
                <h2>Hi, I'm</h2>
                <h1>Front End Developer</h1>
                <button type="button">Download CV</button>
            </div>
        </BannerContainer>
    )
}
