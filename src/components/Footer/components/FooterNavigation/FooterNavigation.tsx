import React from 'react';
import { Link } from 'gatsby';
import { FooterNav } from '@components/Footer/components/FooterNavigation/styles';

export interface IFooterNavProps {}

const FooterNavigation: React.FC<IFooterNavProps> = (props) => {
  return (
    <nav>
      <FooterNav>
        {/*<li className={styles.footerNavItem}>*/}
        {/*  <a href="#">Наши сервисы</a>*/}
        {/*</li>*/}
        <li className="footer-nav--item">
          <Link to="/poetry/">Стихи</Link>
        </li>
        {/*<li className={styles.footerNavItem}><a href="#">О нас</a></li>*/}
      </FooterNav>
    </nav>
  );
};

export default FooterNavigation;
