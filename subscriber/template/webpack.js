// Helper for combining webpack config objects
const { merge } = require('webpack-merge');

module.exports = (config, context) => {
  return merge(config, {
    
    output: {
      filename: '[name].js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          /**
           * Added webpack configuration to separate the json files
           * from the config folder into a separate chunk... 
           * with this now , we can inject the config files separated
           * to replace in the different stages =)
           */
          data: {
            test: /config\/\w.*\.json/,
            filename: 'config/[name].js',
            name(module) {
              const filename = module.rawRequest.replace(/^.*[\\/]/, '');
              return filename.substring(0, filename.lastIndexOf('.'));
            },
          }
        }
      }
    }
  });
};
