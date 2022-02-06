import { render, screen } from '@testing-library/react';

import MainPageLayout from './index';

describe('MainPageLayout', () => {
  const contentText = 'Main Layout';

  it('Should render default components', () => {
    render(<MainPageLayout>{contentText}</MainPageLayout>);
    expect(screen.getByText(contentText).textContent).toBeTruthy();
  });
});
