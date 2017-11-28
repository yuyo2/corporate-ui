const path = require('path');

module.exports = env => {
  return {
    entry: './src/global/main.ts',
    output: {
      filename: env.name + '.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: [ '.ts', '.tsx', '.js', '.json']
    }
  }
};