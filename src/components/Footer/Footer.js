import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {
  facebook,
  instagram,
  github,
  twitter,
} from "@/src/constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <AiOutlineMail size="1.5rem" /> E-mail{" "}
          </LinkTitle>
          <LinkItem href="mailto:ishu.111636@yahoo.com">
            Ishu.111636@yahoo.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learn to Innovate.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href={github}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={instagram}>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href={twitter}>
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
