import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi , I am Chaman Lal Student at Indian Institute of Information Technology , Bhopal
I am an Android Development and Web Development Enthusiast and have made quite a few Website(HTML,CSS, JAVASCRIPT, REACT, NODE.JS) and apps in JAVA and kotlin using Android Studio and Firebase.Contact me : chamanlal97196@gmail.com 
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;