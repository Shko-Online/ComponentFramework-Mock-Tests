const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (/** @type {import('webpack').Configuration} */config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.module.rules.push({ test: /\.resx$/, use: 'raw-loader' });
    config.module.rules.push({ test: /ComponentFramework-Mock-Generator-React\.ts$/, use: 'ignore-loader' });

    console.log(config.module.rules);
    var loader = config.module.rules.find((rule)=>rule.exclude instanceof RegExp);
    loader.exclude = [loader.exclude];
    loader.exclude.push(/ComponentFramework-Mock-Generator-React\.ts$/);
    return config;
  },
}