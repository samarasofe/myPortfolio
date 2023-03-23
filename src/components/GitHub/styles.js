import styled from "styled-components";
import bgGithub from '../../assets/img/imgGithub.png'

export const GithubContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 7rem auto;
    margin-bottom: 7rem;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${bgGithub});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 2rem;

`;

export const ContentGitHub = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    h2{
        text-align: center;
        color: #E0A80D
    }
`;

export const Itens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const Foto = styled.div`
    width: 100%;
    max-width: calc(250px + 4rem);
    border-radius: 50%;
    text-align: center;

    img{
        border-radius: 50%;
        width: 100%;
        max-width: 250px;
        height: 100%;
    }

    h3{
        color: #EEEE
    }
    h4{
        color: #E0A80D
    }
    p{
        color: #EEEE
    }

`

export const ListProject = styled.div`
    width: 100%;
    div{ 
        width: 100%;
        border-radius: 10px;        
        background-color: rgba(238,238,238,0.9);
        padding: 0.5rem 1rem;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
`
export const ButtonDefault = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    

    a, button{
        max-width: 150px;
        width: 100%;
        border: solid 1px #EEEEEE;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #EEEEEE;
        background-color: #DFA70C;
        border-radius: 42px;
        font-size: 1rem;
        padding: 12px 15px;
        margin-bottom: 1rem;
        margin-top: 2rem;
        transition-duration: 1s;
        cursor: pointer;
        text-decoration: none;

        &:hover{
            border: solid 1px #DFA70C;
            background-color: transparent;
            color: #DFA70C;
        }


    }
`
