import React from 'react';
import { ContactContainer, SocialMedia } from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default function Contact() {
  return (
    <ContactContainer id='contact-id'>
      <SocialMedia >
        <a href='https://www.linkedin.com/in/samara-ferreira-276695205/' target={'_blank'} ><LinkedInIcon sx={{ fontSize: 70, color: "white", "&:hover": { color: "#E0A80D" } }} /></a>
        <a href='https://github.com/samarasofe' target={'_blank'}><GitHubIcon sx={{ fontSize: 70, color: "white", "&:hover": { color: "#E0A80D" }  }}/></a>
        <a href='https://www.linkedin.com/in/samara-ferreira-276695205/' target={'_blank'} ><EmailIcon sx={{ fontSize: 70, color: "white", "&:hover": { color: "#E0A80D" } }}/></a>
      </SocialMedia>
      <p> &copy; {new Date().getFullYear()} samarasofe.com</p>
    </ContactContainer>
  )
}