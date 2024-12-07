import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I&apos;m Ishu <br />
        </SectionTitle>
        <SectionText>
          Keep pushing forward and never stop learning!
          Stay curious and keep coding!
        </SectionText>
        <Link href="/Resume.pdf" passHref>
          <Button>View Resume</Button>
        </Link>
      </LeftSection>
    </Section>
  );
};

export default Hero;