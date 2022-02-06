import React from 'react';
import { DiCoda, DiCode, DiDatabase, DiFirebase, DiJava, DiJavascript, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      A beginner, who started working with a wide range of technologies in the web development
      world. From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.js and JavaScript
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Node.js and MySQL
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Skill Set</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Python, Java and C Programming
        </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
