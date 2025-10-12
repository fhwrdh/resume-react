import React from 'react';
import styled from 'styled-components';
import {
  AccountMultipleIcon,
  AirplaneTakeoffIcon,
  CameraIcon,
  ChartLineIcon,
  CodeBracesIcon,
  CubeUnfoldedIcon,
  DatabaseIcon,
  EmailIcon,
  FilePdfIcon,
  GithubCircleIcon,
  GraphqlIcon,
  HeadphonesIcon,
  HexagonMultipleIcon,
  HopsIcon,
  HumanHandsupIcon,
  InstagramIcon,
  LanguageCsharpIcon,
  LanguageCss3Icon,
  LanguageJavascriptIcon,
  LinkedinBoxIcon,
  MapIcon,
  NodejsIcon,
  RobotIcon,
  SchoolIcon,
  StarIcon,
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
const LinkedIn = () => (
  <a href="https://www.linkedin.com/in/franklinhenderson/">
    <LinkedinBoxIcon />
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
        <LinkedIn />
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
      <Bullet icon={FilePdfIcon}>
        <a href="/franklin.henderson.pdf">franklin.henderson.pdf</a>
      </Bullet>
      <Print>
        <Bullet icon={GithubCircleIcon}>
          <a href="https://www.github.com/fhwrdh">github.com/fhwrdh</a>
        </Bullet>
        <Bullet icon={LinkedinBoxIcon}>
          <a href="https://www.linkedin.com/in/franklinhenderson">linkedin.com/in/franklinhenderson</a>
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
      <Bullet icon={LanguageCss3Icon}>HTML, CSS</Bullet>
      <Bullet icon={NodejsIcon}>Node.js, npm, Vite</Bullet>
      <Bullet icon={GraphqlIcon}>GraphQL, REST APIs</Bullet>
      <Bullet icon={RobotIcon}>Claude, Gemini, Copilot, MCP</Bullet>
      <Bullet icon={CodeBracesIcon}>Python, Go</Bullet>
      <Bullet icon={DatabaseIcon}>PostgreSQL, MySQL, NoSQL</Bullet>
      <Bullet icon={HexagonMultipleIcon}>TDD, Agile</Bullet>
      <Bullet icon={GithubCircleIcon}>GitHub, GitLab, CI/CD</Bullet>
      <Bullet icon={CubeUnfoldedIcon}>AWS, Docker</Bullet>
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
      <Bullet icon={StarIcon}>Performance Management</Bullet>
    </Description>
  </Section>
);

const UserGroupsSection = () => (
  <Section>
    <SectionTitle>Community</SectionTitle>
    <Description tight>
      <Bullet icon={AccountMultipleIcon}>WLVJS Co-Organizer</Bullet>
      <Bullet icon={AccountMultipleIcon}>Lunch.js Champion</Bullet>
      <Bullet icon={AccountMultipleIcon}>JS.LA Member</Bullet>
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
      <Bullet icon={CameraIcon}>Film Photography</Bullet>
      <Bullet icon={AirplaneTakeoffIcon}>Travel</Bullet>
      <Bullet icon={HeadphonesIcon}>Music</Bullet>
      <Bullet icon={HopsIcon}>Brewing</Bullet>
    </Description>
  </Section>
);

const AboutMeSection = () => (
  <Section>
    <Summary>
      <Point>
        Principal Engineer with 20+ years building and scaling software systems across fintech, gaming, and advertising technology. Currently leading frontend architecture and team development at Tilia, where I build React/GraphQL interfaces to a system that processes millions in virtual economy transactions.
      </Point>
      <Point>
        Combine deep technical expertise in modern frontend technologies with proven leadership experience, having grown engineering teams from solo contributors to high-performing units. Passionate about maintainable architecture, test-driven development, and mentoring engineers while maintaining hands-on contribution to complex technical challenges. Value close collaboration with users and stakeholders to build tools that truly serve their needs.
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
      <UserGroupsSection />
      <InterestsSection />
    </Left>
    <Right>
      <AboutMeSection />
      <ExperienceSection />
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
    </WithoutBackground>
    <WithBackground>
      <SkillsSection />
      <LeadershipSection />
      <UserGroupsSection />
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
