module.exports = {
  stories: [
    '../../../packages/antwerp-ui/react-components/src/lib/base/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/organisms/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  }
};
