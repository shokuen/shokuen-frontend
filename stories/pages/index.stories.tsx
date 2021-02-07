import React from 'react';
import { Story, Meta } from '@storybook/react';

import Home from '../../src/pages/index';

export default {
  title: 'pages/index',
  component: Home
} as Meta;

const Template: Story<typeof Home> = () => <Home />;

export const Default = Template.bind({});
