import React from 'react';
import { ContactContainer, SocialMedia } from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default function Contact() {
  return (
    <ContactContainer>
      <h2>CONTATOS</h2>
      <SocialMedia >
        <LinkedInIcon sx={{ fontSize: 70 }} />
        <GitHubIcon sx={{ fontSize: 70 }} />
        <EmailIcon sx={{ fontSize: 70 }} />
      </SocialMedia>
    </ContactContainer>
  )
}