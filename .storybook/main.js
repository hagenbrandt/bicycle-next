module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@washingtonpost/storybook-addon-web-vitals',
    '@geometricpanda/storybook-addon-badges',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
