import React from 'react';
import styled, {css} from 'styled-components';
import {ChevronRightIcon} from 'mdi-react';

export const textShadowOnDark = css`
  text-shadow: 1px 1px #333;
`;
export const border = '1px solid #ccc';
export const titleFont = css`
  font-family: 'Open Sans', sans-serif;
`;

// ====================================================
//
export const Container = styled.div`
  display: flex;
  margin: 0;
`;

export const Left = styled.div`
  min-width: 250px;
  padding: 1.5em;
  @media screen {
    border-right: 5px solid black;
    background-color: #304655;
    color: #eee;
    & h2 {
      ${textShadowOnDark};
    }
  }
  @media print {
    padding-left: 0;
  }
`;

export const Right = styled.div`
  padding: 1.5em;
  border-left: ${border};
  min-width: 500px;
  flex-grow: 2;
  @media print {
    padding-right: 0;
  }
`;

export const Header = styled.div`
  ${titleFont};
  margin-bottom: 1em;
`;
export const Name = styled.h1`
  margin: 0;
  font-weight: 600;
  @media screen {
    ${textShadowOnDark};
  }
`;

export const Section = styled.div`
  line-height: 1.5em;
  margin-bottom: 1.5em;
`;
export const SectionTitle = styled.h2`
  ${titleFont};
  margin-bottom: 0.5em;
  font-size: 1.7em;
  font-variant: all-small-caps;
`;

export const Description = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 0.3em;
  ${({tight}) => tight && '& > li { margin-bottom: 0; }'};
`;

export const Summary = styled(Description)``;

export const BulletLi = styled.li`
  margin-bottom: 1em;
  line-height: 1.8em;
`;

export const BulletContent = styled.div`
  display: flex;
  align-items: center;
`;

export const makeBullet = icon => styled(icon)`
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
`;

export const Bullet = ({icon, children}) => {
  const FinalIcon = makeBullet(icon || ChevronRightIcon);
  return (
    <BulletLi>
      <BulletContent>
        <FinalIcon />
        {children}
      </BulletContent>
    </BulletLi>
  );
};

export const Icons = styled.div`
  margin-top: 0.2em;
  & > * {
    margin-right: 0.3em;
  }
`;

// ====================================================
//
export const Company = styled.div`
  &:not(:last-child) {
    border-bottom: ${border};
  }
  margin-top: 1em;
`;

export const Title = styled.h3`
  margin-bottom: 0;
`;
export const CompanyName = styled.h4`
  margin: 0.3em 0;
`;

export const Details = styled.h5`
  margin: 0;
  display: flex;
  font-style: italic;
`;
export const Tenure = styled.div`
  margin-right: 1em;
`;
export const Location = styled.div``;

export const Point = styled.li`
  font-size: 0.9em;
  margin-bottom: 1em;
  line-height: 1.5em;
  color: #888;
`;
