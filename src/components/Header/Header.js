import Link from 'next/link';
import React from 'react';
import { AiFillAlert, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { DiCssdeck, DiSnapSvg } from 'react-icons/di';

import {  facebook, instagram, github, twitter, linkedin } from '@/src/constants/constants';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </Link>
    </Div1>

    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>

    <Div3>
      {/* {socialmedia.map((social, index) => (
        <SocialIcons href={social.link} key={index}>
          <AiFillAlert size="3rem" />
        </SocialIcons>
      ))} */}

      <SocialIcons href={github}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={linkedin}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={instagram}>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href={twitter}>
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
