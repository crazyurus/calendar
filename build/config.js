const path = require('path');
const CracoLessPlugin = require('craco-less');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const isProduction = process.env.NODE_ENV === 'production';

process.env.BUILD_PATH = path.resolve('./dist');

module.exports = {
  plugins: [
    { plugin: CracoLessPlugin },
  ],
  style: {
    modules: {
      localIdentName: '[local]--[hash:base64:5]',
      exportLocalsConvention: 'camelCase',
    },
  },
  webpack: {
    alias: {
      '@': path.resolve('./src'),
    },
    plugins: {
      add: [
        new SubresourceIntegrityPlugin({
          hashFuncNames: ['sha256', 'sha512'],
          enabled: isProduction,
        }),
      ],
    },
    configure(options) {
      options.output.path = process.env.BUILD_PATH;
      options.output.crossOriginLoading = 'anonymous';
      options.devtool = isProduction ? false : 'source-map';

      return options;
    },
  },
  eslint: {
    enable: false,
  },
};
