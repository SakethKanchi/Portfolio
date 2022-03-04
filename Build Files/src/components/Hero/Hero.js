import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There, <br/>
        I'm Saketh
      </SectionTitle>
      <SectionText>
        A beginner learning to code <br/>
      </SectionText>
      <Button onClick={()=> window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;