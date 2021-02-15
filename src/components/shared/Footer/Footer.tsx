import React from 'react';

import { siteTitle } from '../../../../config/site';
import { version } from '../../../../package.json';

import { FooterWrapper } from './styles';

const Footer: React.FC = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="copyright">
            &copy; 2019-{new Date().getFullYear()} {siteTitle}
          </p>
          <p className="version">v{version}</p>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
