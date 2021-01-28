import React from 'react';
import styled from 'styled-components';

const Letter = styled.div`
  padding: 1em;
  line-height: 1.5em;
  & > * {
    margin: 1em;
    min-height: 1em;
  }
`;
const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
`;
const Date = styled.div``;
const CompanyInfo = styled.div``;
const Greeting = styled.div``;
const WhyILikeThem = styled.div``;
const WhyTheyLikeMe = styled.div``;
const Close = styled.div``;

export default () => (
  <Letter>
    <ContactInfo>
      <li>Aaron Zeisler</li>
      <li>California, USA</li>
      <li>work@fhwrdh.net</li>
    </ContactInfo>
    <Date>May 14, 2018</Date>
    <Greeting>Hello .......,</Greeting>
    <WhyILikeThem>
    </WhyILikeThem>
    <WhyILikeThem>
    </WhyILikeThem>
    <WhyTheyLikeMe>
    </WhyTheyLikeMe>
    <WhyTheyLikeMe>
    </WhyTheyLikeMe>
    <WhyTheyLikeMe>
    </WhyTheyLikeMe>
    <Close>
      <div>Kind regards,</div>
      <div>Aaron Zeisler</div>
      <div>aaron.zeisler@gmail.com</div>
    </Close>
  </Letter>
);
