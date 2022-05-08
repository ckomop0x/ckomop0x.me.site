import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Primary',
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'buttons.primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'buttons.secondary',
};
