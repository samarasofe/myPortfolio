import styled from "styled-components";

export const ContainerMenu = styled.nav`
    display: flex;
    list-style: none;
    flex-flow: row nowrap;

    @media (max-width: 540px) {
        flex-flow: column nowrap;
        background-color: #7D8792;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: end;
        align-items: center;
        li{
            margin-left: 10px;
            margin-right: 10px;
            a{
                text-decoration: none;
                color: #7D8792;
                font-size: 1.3rem;
                cursor: pointer;

                &:hover{
                    color: #FFFFFF;
                    transition-duration: 2s;
                }
            }
        }
    }

`;