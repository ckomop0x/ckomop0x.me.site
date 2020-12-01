import React from 'react';

import { siteTitle } from '../../../../config/site';

import { FooterWrapper } from './styles';

const Footer: React.FC = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {siteTitle}
          </p>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
