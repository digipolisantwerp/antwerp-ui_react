import Avatar from './Avatar';

export default {
  title: 'React/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: { type: 'text' },
      defaultValue: 'https://placedog.net/100/100?r',
      table: {
        type: { summary: 'url' },
        defaultValue: { summary: '' }
      },
      description: 'The image parameter will allow to display an authenticated user in the avatar. It will override the letter parameter if provided.',
    },
    letter: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'NT',
      description: 'The letter parameter will allow an authenticated user to display their initials. If an image is provided, it will override the letter parameter.',
    },
    icon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single-neutral' }
      },
      defaultValue: 'single-neutral',
      options: ['single-neutral', 'social-media-snapchat', 'house-chimney', 'bicycle', 'flash'],
      description: 'The icon parameter displays an icon in the avatar for guest users. Authenticated users will have this replaced with their initials, or an image, if they provided one.',
    },
    rounded: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'Adds a class to the component to add a rounded style to it.',
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'small', 'medium', 'large'],
      defaultValue: '',
      description: 'Sets the size for the component. Can be omitted for medium.',
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Gebruiker icoon' }
      },
      defaultValue: 'Gebruiker icoon',
      description: 'The ariaLabel describes an accessible name for the avatar component.',
    },
    imageAlt: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Avatar afbeelding' }
      },
      defaultValue: 'Avatar afbeelding',
      description: 'Image alt text for the provided image.',
    },
    qa: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
      description: 'The qa parameter allows to set the `data-qa` prop on the rendered html of the component.',
    },
  },
  parameters: {}
};

export const avatar = '';
