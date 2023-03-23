import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: #2B2C2C;  
`;

export const ContentAbout = styled.div`
    width: 100%;
    margin: 0 auto;
    h2{
        color: #E0A80D
    }
    display: flex;
    align-items: center;

`;

export const ImgProfile = styled.div`
    img{
        max-width: 50%;
        max-height: 50%;
        border: 5px solid #FFFFFF;
        margin: 30px;
    }
    h3{
        color: #EEEE;
    }
    h4{
        color: #E0A80D;
    }
`

export const TextAbout = styled.div`
    p{
    color: #EEEE;      
    }
`