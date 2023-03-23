import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #2B2C2C;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  margin-top: 10px;

  p{
    color: white
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const SocialMedia = styled.div`
  color: white;
  margin: 20px;
  font-size: 70px;
  cursor: pointer;
  gap: 5rem;
    

`;


