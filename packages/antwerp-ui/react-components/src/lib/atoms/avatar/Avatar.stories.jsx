import Avatar from './Avatar';

export default {
  title: 'React/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: { type: 'text' },
      defaultValue: 'https://placedog.net/100/100?r',
      description: 'The image parameter will allow to display an authenticated user in the avatar. It will override the letter parameter if provided.',
    },
    letter: {
      control: { type: 'text' },
      defaultValue: 'NT',
      description: 'The letter parameter will allow an authenticated user to display their initials. If an image is provided, it will override the letter parameter.',
    },
    icon: {
      control: { type: 'select' },
      defaultValue: 'single-neutral',
      options: ['single-neutral', 'social-media-snapchat', 'house-chimney', 'bicycle', 'flash'],
      description: 'The icon parameter displays an icon in the avatar for guest users. Authenticated users will have this replaced with their initials, or an image, if they provided one.',
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
    imageAlt: {
      control: { type: 'text' },
      defaultValue: 'Avatar afbeelding',
      description: 'Image alt text for the provided image.',
    },
    qa: {
      control: { type: 'text' },
      defaultValue: '',
      description: 'The qa parameter allows for an identification to be given to the component (= data-qa).',
    },
  },
  parameters: {}
};

export const avatar = {};
