import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Primary',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
};
