import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: #2B2C2C;  
    vertical-align: top;
`;

export const ContentAbout = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    h2{
        color: #E0A80D
    }
    display: flex;
    align-items: center;
    @media (max-width: 600px){
        flex-direction: column;
        h2{ 
            text-align: center;
        }
    }

`;

export const ImgProfile = styled.div`
    img{
        max-width: 180px;
        border: 5px solid #FFFFFF;
        margin: 30px;
        filter: grayscale(100%);
        transition: 2s;
        &:hover{
            filter: none;
        }
    }
    h3{
        color: #EEEE;
    }
    h4{
        color: #E0A80D;
    }
`

export const TextAbout = styled.div`
    h2{
        margin: 20px;
    }
    p{
        margin: 20px;
    color: #EEEE;      
    }
`