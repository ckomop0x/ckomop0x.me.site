import React from 'react';

import { Footer as FooterStyled } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Ckomop0x.me
            </p>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
