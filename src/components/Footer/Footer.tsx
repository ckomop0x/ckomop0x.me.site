import React from 'react';

import FacebookLogoIcon from '@components/Icons/FacebookLogo';
import { Footer as FooterStyled } from './styles';
import { FooterNavigation } from './components';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="row center">
          <div className="col-sm-12 col-lg-7 col-xl-6">
            <div className="row center">
              <div className="col-auto center">
                <FooterNavigation />
              </div>
              <div className="col-auto center">
                <a
                  className="link"
                  href="https://www.facebook.com/webtime.studio/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <FacebookLogoIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5 col-xl-6">
            <p className="copyright">
              Ckomop0x.me &copy; {new Date().getFullYear()} Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
