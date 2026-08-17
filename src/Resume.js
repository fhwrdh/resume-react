import React from 'react';
import styled from 'styled-components';
import {
  AccountMultipleIcon,
  AirplaneTakeoffIcon,
  CameraIcon,
  ChartLineIcon,
  CubeUnfoldedIcon,
  DatabaseIcon,
  EmailIcon,
  FilePdfIcon,
  GestureTapIcon,
  GithubCircleIcon,
  GraphqlIcon,
  HeadphonesIcon,
  HexagonMultipleIcon,
  HumanHandsupIcon,
  InstagramIcon,
  LanguageCsharpIcon,
  LanguageCss3Icon,
  LanguageJavascriptIcon,
  MapIcon,
  MedalIcon,
  NodejsIcon,
  RobotIcon,
  SchoolIcon,
  WebIcon,
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
  textShadowOnDark,
} from './ui';
import Responsive from 'react-responsive';

const Screen = props => <Responsive {...props} screen={true} />;
const Print = props => <Responsive {...props} print={true} />;
const Desktop = props => <Responsive {...props} minWidth={900} />;
const Mobile = props => <Responsive {...props} maxWidth={899} />;

const Github = () => (
  <a href="http://www.github.com/fhwrdh">
    <GithubCircleIcon />
  </a>
);
const Instagram = () => (
  <a href="https://www.instagram.com/fhwrdh/">
    <InstagramIcon />
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
    <Screen>
      <Icons>
        <Github />
        <Instagram />
      </Icons>
    </Screen>
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
      <Screen>
        <Bullet icon={FilePdfIcon}>
          <a href="/franklin.henderson.pdf">PDF</a> • 
          <a href="/franklin.henderson.txt">TXT</a> • 
          <a href="/franklin.henderson.md">MD</a> •
          <a href="/franklin.henderson.json">JSON</a>
        </Bullet>
      </Screen>
      <Print>
        <Bullet icon={GithubCircleIcon}>
          <a href="https://www.github.com/fhwrdh">github.com/fhwrdh</a>
        </Bullet>
        <Bullet icon={InstagramIcon}>
          <a href="https://www.instagram.com/fhwrdh">instagram.com/fhwrdh</a>
        </Bullet>
      </Print>
    </Description>
  </Section>
);

const SkillsSection = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Description tight>
      <Bullet tight icon={LanguageJavascriptIcon}>
        JavaScript, TypeScript, React
      </Bullet>
      <Bullet icon={GestureTapIcon}>User experience</Bullet>
      <Bullet icon={GraphqlIcon}>GraphQL, REST API design</Bullet>
      <Bullet icon={RobotIcon}>Claude, Gemini, Copilot, MCP</Bullet>
      <Bullet icon={NodejsIcon}>Node.js, Go, Python</Bullet>
      <Bullet icon={LanguageCss3Icon}>HTML, CSS, Vite</Bullet>
      <Bullet icon={DatabaseIcon}>PostgreSQL, MySQL, NoSQL</Bullet>
      <Bullet icon={GithubCircleIcon}>GitHub, GitLab, CI/CD</Bullet>
      <Bullet icon={CubeUnfoldedIcon}>AWS, Docker, Linux</Bullet>
      <Bullet icon={HexagonMultipleIcon}>TDD, Agile</Bullet>
    </Description>
  </Section>
);

const LeadershipSection = () => (
  <Section>
    <SectionTitle>Leadership</SectionTitle>
    <Description tight>
      <Bullet icon={HumanHandsupIcon}>Team Building, Hiring</Bullet>
      <Bullet icon={SchoolIcon}>Mentoring</Bullet>
      <Bullet icon={ChartLineIcon}>Technical Strategy</Bullet>
      <Bullet icon={MapIcon}>Roadmap Planning</Bullet>
      <Bullet icon={AccountMultipleIcon}>Cross-functional Collaboration</Bullet>
    </Description>
  </Section>
);

const EducationSection = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Description tight>
      <Bullet icon={SchoolIcon}>CSUN, Math</Bullet>
      <Bullet icon={SchoolIcon}>Santa Monica College, CS</Bullet>
    </Description>
  </Section>
);

const InterestsSection = () => (
  <Section>
    <SectionTitle>Interests</SectionTitle>
    <Description tight>
      <Bullet icon={CameraIcon}>Film Photography</Bullet>
      <Bullet icon={AirplaneTakeoffIcon}>Travel</Bullet>
      <Bullet icon={HeadphonesIcon}>Music</Bullet>
      <Bullet icon={MedalIcon}>Special Olympics</Bullet>
    </Description>
  </Section>
);

const AboutMeSection = () => (
  <Section>
    <Summary>
      <Point>
        I've spent 20+ years building software across fintech, gaming, and ad tech. These days I'm building Tilia's Admin Tools UI, the GraphQL API it runs on, and the delegated tokens that let AI agents use it. I also contribute to the underlying REST APIs. I've managed at department scale before and chose to come back to building and learning.
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

const ProjectsSection = () => (
  <Section>
    <SectionTitle>Recent Projects</SectionTitle>
    <Description>
      <Point role="Air Traffic Control, a work-in-flight dashboard">
        A dashboard I built for myself. One command polls the issue tracker and GitHub across about 20 repos and caches what it finds. A second pass sorts that snapshot into a single board, closest-to-done first, and a Claude Code slash command renders it. The fetching and sorting are ordinary deterministic code that runs before the agent sees anything, so the board never guesses at status.
      </Point>
      <Point role="Tomu, an MCP tool server for film photography">
        An MCP server I run from Claude sessions. It tracks film from purchase through development, works out chemistry and dilutions, and keeps my field notes. Every recommendation says where it came from, so I can tell whether a suggestion rests on my own logged results or on a manufacturer's datasheet.
      </Point>
    </Description>
  </Section>
);

const MobileContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const WithBackground = styled.div`
  @media screen {
    padding: 1em;
    background-color: #304655;
    color: #ddd;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    & h2 {
      ${textShadowOnDark};
    }
  }
`;
const WithoutBackground = styled.div`
  @media screen {
    padding: 1em;
  }
`;

const DesktopLayout = () => (
  <Container>
    <Left>
      <Head />
      <ContactSection />
      <SkillsSection />
      <LeadershipSection />
      <EducationSection />
      <InterestsSection />
    </Left>
    <Right>
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </Right>
  </Container>
);

const MobileLayout = () => (
  <MobileContainer>
    <WithBackground>
      <Head />
      <ContactSection />
    </WithBackground>
    <WithoutBackground>
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </WithoutBackground>
    <WithBackground>
      <SkillsSection />
      <LeadershipSection />
      <EducationSection />
      <InterestsSection />
    </WithBackground>
  </MobileContainer>
);

export default () => {
  return (
    <React.Fragment>
      <Print>
        <DesktopLayout />
      </Print>
      <Screen>
        <Desktop>
          <DesktopLayout />
        </Desktop>
        <Mobile>
          <MobileLayout />
        </Mobile>
      </Screen>
    </React.Fragment>
  );
};
