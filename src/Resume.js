import React from 'react';
import styled from 'styled-components';
import {
  AccountMultipleIcon,
  AirplaneTakeoffIcon,
  CameraIcon,
  CodeBracesIcon,
  CubeUnfoldedIcon,
  DatabaseIcon,
  EmailIcon,
  FilePdfIcon,
  GithubCircleIcon,
  HeadphonesIcon,
  HexagonMultipleIcon,
  HopsIcon,
  HumanHandsupIcon,
  LanguageCsharpIcon,
  LanguageCss3Icon,
  LanguageJavascriptIcon,
  LinkedinBoxIcon,
  NpmIcon,
  SchoolIcon,
  TwitterIcon,
  WebIcon,
  WebpackIcon,
} from 'mdi-react';
import data from './resume-data.js';
import Job from './Job';
import {
  Bullet,
  Container,
  Description,
  Header,
  Icons,
  Left,
  Name,
  Point,
  Right,
  Section,
  SectionTitle,
  Summary,
} from './ui';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={900} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={959} />;
const Mobile = props => <Responsive {...props} maxWidth={899} />;

const Github = () => (
  <a href="http://www.github.com/fhwrdh">
    <GithubCircleIcon />
  </a>
);
const LinkedIn = () => (
  <a href="https://www.linkedin.com/in/franklinhenderson/">
    <LinkedinBoxIcon />
  </a>
);
const Twitter = () => (
  <a href="https://www.twitter.com/fhwrdh/">
    <TwitterIcon />
  </a>
);

const Head = () => (
    <Header>
      <Desktop>
        <Name>Franklin</Name>
        <Name>Henderson</Name>
      </Desktop>
      <Mobile>
        <Name>Franklin Henderson</Name>
      </Mobile>
      <Icons>
        <Github />
        <LinkedIn />
        <Twitter />
      </Icons>
    </Header>
);

const ContactSection = () => (
  <Section>
    <SectionTitle>Contact</SectionTitle>
    <Description tight>
      <Bullet icon={EmailIcon}>
        <a href="mailto:work@fhwrdh.net">work@fhwrdh.net</a>
      </Bullet>
      <Bullet icon={WebIcon}>
        <a href="http://resume.fhwrdh.net">resume.fhwrdh.net</a>
      </Bullet>
      <Bullet icon={FilePdfIcon}>
        <a href="http://resume.fhwrdh.net/franklin.henderson.pdf">
          franklin.henderson.pdf
        </a>
      </Bullet>
    </Description>
  </Section>
);

const SkillsSection = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Description tight>
      <Bullet tight icon={LanguageJavascriptIcon}>
        JavaScript, React, Node
      </Bullet>
      <Bullet icon={LanguageCss3Icon}>HTML, CSS</Bullet>
      <Bullet icon={WebpackIcon}>Webpack, Gulp, Jest, etc.</Bullet>
      <Bullet icon={NpmIcon}>npm, GitHub, GitLab</Bullet>
      <Bullet icon={CodeBracesIcon}>JVM, Java</Bullet>
      <Bullet icon={LanguageCsharpIcon}>.Net, C#</Bullet>
      <Bullet icon={DatabaseIcon}>SQL, NoSQL</Bullet>
      <Bullet icon={HexagonMultipleIcon}>XP, TDD, Pairing</Bullet>
      <Bullet icon={CubeUnfoldedIcon}>Agile, Kanban, Scrum</Bullet>
      <Bullet icon={HumanHandsupIcon}>Leadership, Mentoring</Bullet>
    </Description>
  </Section>
);

const UserGroupsSection = () => (
  <Section>
    <SectionTitle>User Groups</SectionTitle>
    <Description tight>
      <Bullet icon={AccountMultipleIcon}>WLVJS Co-Organizer, Current</Bullet>
      <Bullet icon={AccountMultipleIcon}>Lunch.js Champion, Current</Bullet>
      <Bullet icon={AccountMultipleIcon}>JS.LA, Current</Bullet>
      <Bullet icon={AccountMultipleIcon}>ALT.NET, Dublin, 2009-2011</Bullet>
    </Description>
  </Section>
);

const EducationSection = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Description tight>
      <Bullet icon={SchoolIcon}>CSUN, Math</Bullet>
      <Bullet icon={SchoolIcon}>Santa Monica College, CS</Bullet>
      <Bullet icon={SchoolIcon}>College of Marin, CS</Bullet>
    </Description>
  </Section>
);

const InterestsSection = () => (
  <Section>
    <SectionTitle>Interests</SectionTitle>
    <Description tight>
      <Bullet icon={HopsIcon}>Brewing</Bullet>
      <Bullet icon={CameraIcon}>Photography</Bullet>
      <Bullet icon={AirplaneTakeoffIcon}>Travel</Bullet>
      <Bullet icon={HeadphonesIcon}>Music</Bullet>
    </Description>
  </Section>
);

const AboutMeSection = () => (
  <Section>
    <SectionTitle>About Me</SectionTitle>
    <Summary>
      <Point>
        Software professional with more than 20 years of experience building
        scalable, testable, maintainable systems across multiple technology
        platforms.
      </Point>
      <Point>
        Proven history of leadership, both formally as a development manager and
        informally mentoring developers and organizations on agile practices,
        test-driven development, front end technology.
      </Point>
      <Point>
        Strong agile project management, analysis and presentation skills.
      </Point>
    </Summary>
  </Section>
);

const ExperienceSection = () => (
  <Section>
    <SectionTitle>Experience</SectionTitle>
    {data.experience.map((e, idx) => <Job key={idx} data={e} />)}
  </Section>
);

const MobileContainer = styled.div`
  margin: 1em;
`;

export default () => {
  return (
    <React.Fragment>
      <Desktop>
        <Container>
          <Left>
            <Head />
            <ContactSection />
            <SkillsSection />
            <UserGroupsSection />
            <EducationSection />
            <InterestsSection />
          </Left>
          <Right>
            <AboutMeSection />
            <ExperienceSection />
          </Right>
        </Container>
      </Desktop>
      <Mobile>
        <MobileContainer>
          <Head />
          <ContactSection />
          <AboutMeSection />
          <ExperienceSection />
          <SkillsSection />
          <UserGroupsSection />
          <EducationSection />
          <InterestsSection />
        </MobileContainer>
      </Mobile>
    </React.Fragment>
  );
};
