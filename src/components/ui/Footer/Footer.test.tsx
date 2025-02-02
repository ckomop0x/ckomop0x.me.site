import { render, screen } from '@testing-library/react';

import projectConfig from '../../../../package.json';

import Footer from './index';

describe('Footer', () => {
  const currentYear = new Date().getFullYear();
  const footerText = `© 2019 - ${currentYear} ckomop0x.me v${projectConfig.version}`;

  it('Should render default component', () => {
    render(<Footer projectTitle="ckomop0x.me" />);
    expect(screen.getByText(footerText).textContent).toBeTruthy();
  });
});
