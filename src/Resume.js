import React from 'react';
import styled from 'styled-components';
import {
  AccountMultipleIcon,
  AirplaneTakeoffIcon,
  SourceMergeIcon,
  CameraIcon,
  CardsIcon,
  CloudBracesIcon,
  CodeBracesIcon,
  ConsoleLineIcon,
  CubeUnfoldedIcon,
  DatabaseIcon,
  Dice5Icon,
  EmailIcon,
  EmoticonIcon,
  InsertEmoticonIcon,
  FilePdfIcon,
  GithubCircleIcon,
  GoogleCirclesExtendedIcon,
  HeadphonesIcon,
  HexagonMultipleIcon,
  HomeHeartIcon,
  HopsIcon,
  HumanHandsupIcon,
  LanguageCsharpIcon,
  LanguageCss3Icon,
  LanguageGoIcon,
  LanguageJavascriptIcon,
  LanguagePythonIcon,
  LightbulbOnIcon,
  LinkedinBoxIcon,
  MicrosoftIcon,
  NpmIcon,
  PackageVariantIcon,
  BoatIcon,
  PhoneIcon,
  ShipIcon,
  ShipWheelIcon,
  SailingIcon,
  SourceBranchIcon,
  SchoolIcon,
  TruckFastIcon,
  TruckDeliveryIcon,
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
  textShadowOnDark,
} from './ui';
import Responsive from 'react-responsive';

const Screen = props => <Responsive {...props} screen={true} />;
const Print = props => <Responsive {...props} print={true} />;
const Desktop = props => <Responsive {...props} minWidth={900} />;
const Mobile = props => <Responsive {...props} maxWidth={899} />;

const Github = () => (
  <a href="http://www.github.com/aaron-zeisler">
    <GithubCircleIcon />
  </a>
);
const LinkedIn = () => (
  <a href="https://www.linkedin.com/in/aaron-zeisler/">
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
      <Name>Aaron Zeisler</Name>
    </Desktop>
    <Mobile>
      <Name>Aaron Zeisler</Name>
    </Mobile>
    <Screen>
      <Icons>
        <Github />
        <LinkedIn />
      </Icons>
    </Screen>
  </Header>
);

const ContactSection = () => (
  <Section>
    <SectionTitle>Contact</SectionTitle>
    <Description tight>
      <Bullet icon={EmailIcon}>
        <a href="mailto:aaron.zeisler@gmail.com">aaron.zeisler@gmail.com</a>
      </Bullet>
      <Screen>
        <Bullet icon={FilePdfIcon}>
          <a href="/aaron.zeisler.pdf">aaron.zeisler.pdf</a>
        </Bullet>
      </Screen>
      <Print>
        <Bullet icon={LinkedinBoxIcon}>
          <a href="https://www.linkedin.com/in/aaron-zeisler">linkedin.com/in/aaron-zeisler</a>
        </Bullet>
      </Print>
    </Description>
  </Section>
);

const SkillsSection = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Description tight>
      <Bullet icon={CodeBracesIcon}>Golang, Python</Bullet>
      <Bullet icon={LanguageJavascriptIcon}>Javascript, Angular</Bullet>
      <Bullet icon={MicrosoftIcon}>ASP.NET, C#</Bullet>
      <Bullet icon={DatabaseIcon}>MySQL, Postgres, Redis</Bullet>
      <Bullet icon={GoogleCirclesExtendedIcon}>Microservices, REST, gRPC</Bullet>
      <Bullet icon={CloudBracesIcon}>EC2, S3, SNS, SQS, SES</Bullet>
      <Bullet icon={HexagonMultipleIcon}>Kafka, RabbitMQ</Bullet>
      <Bullet icon={ConsoleLineIcon}>Linux, Docker</Bullet>
      <Bullet icon={SourceBranchIcon}>GitHub, Bitbucket, Mercurial</Bullet>
      <Bullet icon={TruckDeliveryIcon}>Continuous Integration</Bullet>
      <Bullet icon={LightbulbOnIcon}>Pair Programming, TDD</Bullet>
      <Bullet icon={CubeUnfoldedIcon}>Agile, Kanban, Scrum</Bullet>
    </Description>
  </Section>
);

const EducationSection = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Description tight>
      <Bullet icon={SchoolIcon}>Bowling Green State Univ.</Bullet>
      <Bullet tight>BS, Computer Science</Bullet>
    </Description>
  </Section>
);

const InterestsSection = () => (
  <Section>
    <SectionTitle>Interests</SectionTitle>
    <Description tight>
      <Bullet icon={HopsIcon}>Brewing</Bullet>
      <Bullet icon={Dice5Icon}>Board Games</Bullet>
      <Bullet icon={HeadphonesIcon}>Music</Bullet>
      <Bullet icon={HomeHeartIcon}>Dad Stuff</Bullet>
    </Description>
  </Section>
);

const AboutMeSection = () => (
  <Section>
    <SectionTitle top>About Me</SectionTitle>
    <Summary>
      <Point>
        A software engineer with more than fifteen years of experience.  In my career I have worked in the healthcare, education, gaming, fashion, and financial services industries.  I specialize in building data-intensive applications and services that are scalable, testable, and maintainable.
      </Point>
      <Point>
        I'm looking for a position where I'm constantly being challenged and trying new things.  I'd love to be at a company that has a strong culture of technical innovation, learning, and teaching.  I'm currently excited about serverless applications and event-driven systems.  I find a zen-like peace in code refactoring.
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
      <EducationSection />
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
