import { render, screen } from '@testing-library/react';

import projectConfig from '../../../../package.json';

import Footer from './index';

import { baseSettings } from 'config/site-config';

describe('Footer', () => {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} ${baseSettings.projectTitle}. v${projectConfig.version}`;

  it('Should render default component', () => {
    render(<Footer />);
    expect(screen.getByText(footerText).textContent).toBeTruthy();
  });
});
