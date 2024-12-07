import Link from 'next/link';
import React from 'react';
import { AiFillAlert, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { DiCssdeck, DiSnapSvg } from 'react-icons/di';

import {  facebook, instagram, github, twitter, linkedin } from '@/src/constants/constants';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import Image from 'next/image';

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
        <Image src={'/logo.svg'} alt="Logo" width={28} height={28} />
        <Span style={{marginLeft:'8px'}}>Portfolio</Span>
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
      <SocialIcons href={github} hoverColor="#eee">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={linkedin} hoverColor="#0A66C2">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={twitter} hoverColor="#1DA1F2">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
