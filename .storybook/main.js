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
    '@whitespace/storybook-addon-html',
    '@storybook/addon-jest',
    'storybook-mobile',
    '@storybook/addon-knobs/register',
    'storybook-addon-playwright/preset',
    'storybook-addon-playwright/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
