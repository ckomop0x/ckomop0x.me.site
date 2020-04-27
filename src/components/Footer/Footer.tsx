import React from 'react';
import { Link } from 'gatsby';

import * as styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={['row', styles.center].join(' ')}>
          <div className="col-sm-12 col-lg-7 col-xl-6">
            <div className={['row', styles.center].join(' ')}>
              <div className={['col-auto', styles.center].join(' ')}>
                <nav>
                  <ul className={styles.footerNav}>
                    {/*<li className={styles.footerNavItem}>*/}
                    {/*  <a href="#">Наши сервисы</a>*/}
                    {/*</li>*/}
                    <li className={styles.footerNavItem}><Link to="/portfolio/">Портфолио</Link></li>
                    {/*<li className={styles.footerNavItem}><a href="#">О нас</a></li>*/}
                  </ul>
                </nav>
              </div>
              <div className={['col-auto', styles.center].join(' ')}>
                <a
                  className={styles.link}
                  href="https://www.facebook.com/webtime.studio/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <svg width={30} height={30} viewBox="0 0 30 30">
                    <defs>
                      <clipPath id="prefix__clip-path">
                        <path
                          id="prefix__Rectangle_55"
                          d="M0 0h30v30H0z"
                          style={{
                            transition: ".3s ease",
                          }}
                          stroke="red"
                          fill="#fff"
                        />
                      </clipPath>
                    </defs>
                    <g id="prefix__Mask_Group_19">
                      <g id="prefix__facebook-logo-button">
                        <g id="prefix__Group_71">
                          <path
                            id="prefix__Path_103"
                            d="M15 0a15 15 0 1015 15A15.017 15.017 0 0015 0zm3.73 15.528h-2.44v8.7h-3.616v-8.7h-1.719v-3.074h1.719v-1.989a3.391 3.391 0 013.649-3.649l2.68.01V9.81h-1.945a.736.736 0 00-.767.837v1.807h2.755z"
                            style={{
                              transition: ".3s ease",
                            }}
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5 col-xl-6">
            <p className={styles.copyright}>
              Webtime.Studio &copy; {new Date().getFullYear()} Все права
              защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
