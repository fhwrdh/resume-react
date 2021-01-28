import React from 'react';
import {
  TitleLine, Company, Title, CompanyName, Details, Tenure, Location, Description, Point } from './ui';

const Job = ({data}) => {
  if (data.live && data.live === 'off') return null;
  const {breakAfter, companyName, title, tenure, location, description} = data;
  return (
    <Company breakAfter={breakAfter}>
        <Title>{title}</Title>
      <TitleLine>
        <CompanyName>{companyName}</CompanyName>
        <Details>
          <Tenure>
            {tenure.start} - {tenure.end}
          </Tenure>
          <Location>{location}</Location>
        </Details>
      </TitleLine>
      <Description>
        {description.map((p, idx) => <Point key={idx} role={p.role}>{p.text}</Point>)}
      </Description>
    </Company>
  );
};

export default Job;
