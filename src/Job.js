import React from 'react';
import {
  TitleLine, Company, Title, CompanyName, Details, Tenure, Location, Description, Point } from './ui';

const Job = ({data}) => {
  if (data.live && data.live === 'off') return null;
  const {breakAfter, companyName, title, tenure, location, description, compact} = data;
  
  if (compact) {
    return (
      <Company breakAfter={breakAfter}>
        <Title>{companyName}</Title>
        <Description>
          {description.map((p, idx) => (
            <div key={idx} style={{marginBottom: '1.2em', marginTop: idx === 0 ? '0.8em' : '0'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.1em'}}>
                <div style={{fontWeight: 'bold', fontSize: '0.9em'}}>{p.role}</div>
                <div style={{fontWeight: 'initial', margin: 0, display: 'flex', justifyContent: 'flex-end', fontStyle: 'italic', fontSize: '0.85em'}}>
                  {(() => {
                    const parts = p.text.split(' - ');
                    const companyLocation = parts[0];
                    // Extract dates from company string (assuming format "Company, Location (dates)")
                    const match = companyLocation.match(/^(.+)\s+\((.+)\)$/);
                    if (match) {
                      return (
                        <>
                          <div style={{marginRight: '0.5em'}}>{match[1]}</div>
                          <div>{match[2]}</div>
                        </>
                      );
                    }
                    return companyLocation;
                  })()}
                </div>
              </div>
              <div style={{fontSize: '0.85em'}}>{p.text.split(' - ')[1]}</div>
            </div>
          ))}
        </Description>
      </Company>
    );
  }
  
  return (
    <Company breakAfter={breakAfter}>
        <Title>{title}</Title>
      <TitleLine>
        <CompanyName>{companyName}</CompanyName>
        <Details>
          <Location style={{marginRight: '0.5em'}}>{location}</Location>
          <Tenure>
            {tenure.start} - {tenure.end}
          </Tenure>
        </Details>
      </TitleLine>
      <Description>
        {description.map((p, idx) => <Point key={idx} role={p.role}>{p.text}</Point>)}
      </Description>
    </Company>
  );
};

export default Job;
