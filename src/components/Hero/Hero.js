import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There <br />
          I'm Ishu Singh
        </SectionTitle>
        <SectionText>
          This is my personal portfolio website, where I showcase all the projects I have created till now!
        </SectionText>
        <Button onClick={() => window.location = "mailto:ishu.111636@yahoo.com"}>Email me!</Button>
      </LeftSection>
    </Section>

  );
};

export default Hero;