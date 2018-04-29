import React from 'react';
import {
  Company, Title, CompanyName, Details, Tenure, Location, Description, Point } from './ui';

const Job = ({data}) => {
  if (data.live && data.live === 'off') return null;
  const {companyName, title, tenure, location, description} = data;
  return (
    <Company>
      <Title>{title}</Title>
      <CompanyName>{companyName}</CompanyName>
      <Details>
        <Tenure>
          {tenure.start} - {tenure.end}
        </Tenure>
        <Location>{location}</Location>
      </Details>
      <Description>
        {description.map((p, idx) => <Point key={idx}>{p}</Point>)}
      </Description>
    </Company>
  );
};

export default Job;
