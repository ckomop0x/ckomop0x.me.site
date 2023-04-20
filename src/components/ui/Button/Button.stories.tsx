import { Meta } from '@storybook/react';
import React from 'react';

import Button from './Button';
export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Primary',
  },
} as Meta<typeof Button>;

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
