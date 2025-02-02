import { FC } from 'react';

import projectConfig from '../../../../package.json';

import { themePalette } from 'styles/colors';

interface FooterProps {
  projectTitle: string;
}

const Footer: FC<FooterProps> = ({ projectTitle = '' }) => {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} ${projectTitle} v${projectConfig.version}`;

  return (
    <footer
      className="
      m-auto
      h-[70px]
      p-4
      flex
      justify-center
      items-center
      box-border
    "
      style={{
        background: 'hsla(38, 20%, 80%, 1)',
        color: themePalette.primaryTitle,
      }}
    >
      <p className="text-[16px] p-0 m-0 text-center">{footerText}</p>
    </footer>
  );
};

export default Footer;
