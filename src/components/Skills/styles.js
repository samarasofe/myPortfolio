import styled from "styled-components";


export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #2B2C2C;
    border:solid 30px;
    border-color: #fff;
    padding: 5px 5px;
    h1 {
        text-align: center;
        color: #E0A80D;
        margin-top: 50px;
        margin-bottom: 25px;
        padding-bottom: 25px;
    }
    p {
        text-align: center;
        height: 1.5rem
    }
    img{
        align-items: center;
    }
`;

export const ContentSkills = styled.div`

    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2.5rem;

    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 50px;

    span{
        font-size: 20px;
        color: #0000;
    }

    @media (max-width: 600px){
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 20px 20px 20px 20px;
        margin: 20px 20px 20px 0px;

    }
        
`;

