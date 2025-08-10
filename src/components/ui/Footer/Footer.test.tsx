import { render, screen } from '@testing-library/react'

import projectConfig from '../../../../package.json'

import Footer from './index'

describe('Footer', () => {
  const currentYear = new Date().getFullYear()
  const footerText = `© 2019-${currentYear}, Павел Клочков`

  render(<Footer projectTitle="Павел Клочков" />)

  it('Should render footer text component', () => {
    expect(screen.getByText(footerText).textContent).toBeTruthy()
    expect(
      screen.getByText(`v${projectConfig.version}`).textContent,
    ).toBeTruthy()
  });
})
