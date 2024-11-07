import { Meta } from '@storybook/react';

import LegacyButton from './LegacyButton';
export default {
  title: 'components/Button',
  component: LegacyButton,
  args: {
    children: 'Primary',
  },
} as Meta<typeof LegacyButton>;

export const Primary = {
  args: {
    children: 'Primary',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary',
  },
};
