import { siteTitle } from '../../../../config/site';
import projectConfig from '../../../../package.json';

import { FooterWrapper } from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="copyright">
              &copy; 2019-{new Date().getFullYear()} {siteTitle}
            </p>
            <p className="version">v{projectConfig.version}</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}
