import { render, screen } from '@testing-library/react';

import SectionTitle, { SectionTitleProps } from './SectionTitle';

describe('DetailItem', () => {
  const title = 'Section Title';

  it('Should render default component', () => {
    const sectionTitleProps: SectionTitleProps = {
      title,
    };

    render(<SectionTitle {...sectionTitleProps} />);
    expect(screen.getByText(title).textContent).toBe(title);
  });
});
