module.exports = {
  stories: ['../stories/**/*.stories.@(mdx|js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],

  webpackFinal: async (config) => {
    config.module.rules = [
      ...config.module.rules.filter(
        (rule) => rule.test.source !== /\.css$/.source
      ),
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ];
    config.devServer = {
      ...config.devServer,
      watchOptions: {
        poll: true,
        ignored: /node_modules/
      }
    };
    console.log(config);
    return config;
  }
};
