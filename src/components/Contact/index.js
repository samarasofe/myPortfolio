import React from 'react';
import { ContactContainer, SocialMedia } from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';


export default function Contact() {
  return (
    <ContactContainer>
      <SocialMedia >
        <IconButton >
        <LinkedInIcon href="https://www.linkedin.com/in/samara-ferreira-276695205/" sx={{ fontSize: 70 }} />
        </IconButton>
        <IconButton >
        <GitHubIcon href="https://github.com/samarasofe" sx={{ fontSize: 70 }} />
        </IconButton>
        <IconButton><EmailIcon sx={{ fontSize: 70 }}/></IconButton>
        
      </SocialMedia>
      <p> &copy; 2023 samarasofe.com</p>
    </ContactContainer>
  )
}