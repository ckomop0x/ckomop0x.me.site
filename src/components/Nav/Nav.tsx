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
          <Link to="/blog/" className={inner ? styles.inner : ''}>Блог</Link>
          <Link to="/poetry/" className={inner ? styles.inner : ''}>Стихи</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
