import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './Resume';
import CoverLetter from './CoverLetter';
import GlobalStyle from './globalCss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <Resume />
  </>
);
// ReactDOM.render(<CoverLetter />, document.getElementById('root'));
