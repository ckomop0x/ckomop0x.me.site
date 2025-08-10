import { FC } from 'react';

import projectConfig from '../../../../package.json';

interface FooterProps {
  projectTitle: string;
}

const Footer: FC<FooterProps> = ({ projectTitle = '' }) => {
  const currentYear = new Date().getFullYear();
  const footerText = `© 2019-${currentYear}, ${projectTitle}`;

  return (
    <footer
      className="
      m-auto
      h-[70px]
      p-4
    "
      style={{
        background: 'hsla(38, 20%, 80%, 1)',
      }}
    >
      <p className="p-0 m-0 text-center">{footerText}</p>
      <p className="text-center text-[12px]">v{projectConfig.version}</p>
    </footer>
  );
};

export default Footer;
