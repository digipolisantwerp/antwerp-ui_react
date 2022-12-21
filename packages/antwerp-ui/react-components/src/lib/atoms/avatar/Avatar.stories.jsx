import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'React/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    icon: {
      control: { type: 'select' },
      defaultValue: 'single-neutral',
      options: ['single-neutral', 'social-media-snapchat', 'house-chimney', 'bicycle', 'flash'],
      description: 'The icon parameter displays an icon in the avatar for guest users. Authenticated users will have this replaced with their initials, or an image, if they provided one.',
    },
    letter: {
      control: { type: 'text' },
      defaultValue: 'AC',
      description: 'The letter parameter will allow an authenticated user to display their initials. If an image is provided, it will override the letter parameter.',
    },
    image: {
      control: { type: 'text' },
      defaultValue: 'https://placedog.net/100/100?r',
      description: 'The image parameter will allow to display an authenticated user in the avatar. It will override the letter parameter if provided.',
    },
    imageAlt: {
      control: { type: 'text' },
      defaultValue: 'Avatar afbeelding',
      description: 'Image alt text for the provided image.',
    },
    rounded: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Adds a class to the component to add a rounded style to it.',
    },
    size: {
      control: { type: 'select' },
      options: ['', 'small', 'medium', 'large'],
      defaultValue: '',
      description: 'Sets the size for the component. Can be omitted for medium.',
    },
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: 'Gebruiker icoon',
      description: 'The ariaLabel describes an accessible name for the avatar component.',
    },
    qa: {
      control: { type: 'text' },
      description: 'The qa parameter allows for an identification to be given to the component (= id).',
    },
  },
  parameters: {}
};

const Template = ({ ...args }) => <Avatar {...args} />;

export const Base = Template.bind({});
Base.args = {
  image: 'https://placedog.net/100/100?r',
  letter: 'AC',
  icon: 'jedi',
  rounded: false,
  size: 'medium',
  imageAlt: 'Alt for the image',
  ariaLabel: 'Aria label for the avatar'
};
