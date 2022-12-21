import React from 'react';
import { Avatar } from './Avatar';

export default {
  title: 'React/Atoms/Avatar',
  component: Avatar,
  parameters: {}
};

const Template = () => <Avatar letter='NT' rounded/>;

export const Base = Template.bind({});

Base.args = {};
