import React from 'react';
import { DiBackbone, DiFirebase, DiHtml53DEffects, DiMootools, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {/* I&pos;ve worked with a range of technologies in the web development world. */}
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>React.js, NextJS, ShadcnUI</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBackbone size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Python, Django, NodeJS, MongoDB, SQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml53DEffects size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Figma tools</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
