import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
   Welcome To <br/>
   My Personal Portfolio
  </SectionTitle>
  <SectionText>
   This is my Website,<br/> Please scroll down to explore...
  </SectionText>
  <Button onClick={()=> window.location ="https://www.freecodecamp.org/theumbra"}>Learn More</Button>
</LeftSection>
</Section>
);

export default Hero;