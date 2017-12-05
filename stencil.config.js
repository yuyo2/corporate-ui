exports.config = {
  bundles: [
    { components: ['corporate-ui'] },
    { components: ['scania-ui'] }
  ],
  srcDir: 'src'
  /*collections: [
    { name: '@stencil/router' }
  ]*/
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
