const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'fun-ui/lib': path.resolve(__dirname, '../components/'),
        'fun-ui/esm': path.resolve(__dirname, '../components/'),
        'fun-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
