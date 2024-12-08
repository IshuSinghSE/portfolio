import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {
  facebook,
  instagram,
  github,
  twitter,
  linkedin,
  email,
} from "@/src/constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <AiOutlineMail size="1.5rem" /> E-mail{" "}
          </LinkTitle>
          <LinkItem href={`mailto:${email}`}>
            {email}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learn to Innovate.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={github} hoverColor="#333">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={linkedin} hoverColor="#0077b5">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={instagram} hoverColor="#e4405f">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href={twitter} hoverColor="#1da1f2">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
