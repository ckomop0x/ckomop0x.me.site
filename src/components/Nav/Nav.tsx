import { Link } from 'gatsby';
import React from 'react';

import * as styles from './nav.module.scss';

export interface INavProps {
  title: string;
  inner?: boolean;
}

const Nav: React.FC<INavProps> = ({ title, inner }) => {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" className={`${styles.topLogo} ${inner ? styles.inner : ''}`}>
        {title}
      </Link>
      <ul className={styles.topMenu}>
        <li>
          <Link to="/portfolio/" className={inner ? styles.inner : ''}>Портфолио</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
