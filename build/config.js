const path = require('path');
const CracoLessPlugin = require('craco-less');
const CracoCSSModules = require('craco-css-modules');
const CracoESBuildPlugin = require('craco-esbuild');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const isProduction = process.env.NODE_ENV === 'production';
const isAnalysis = process.env.ANALYSE === 'TRUE';

process.env.BUILD_PATH = path.resolve('./dist');
process.env.GENERATE_SOURCEMAP = !isProduction.toString();

module.exports = {
  plugins: [
    { plugin: CracoLessPlugin },
    { plugin: CracoCSSModules },
    { plugin: CracoESBuildPlugin },
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
      ].concat(isAnalysis ? new BundleAnalyzerPlugin() : []),
      remove: ['WebpackManifestPlugin'],
    },
    configure(options) {
      options.output.crossOriginLoading = 'anonymous';

      return options;
    },
  },
};
