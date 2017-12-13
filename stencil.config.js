exports.config = {
  bundles: [
    { components: ['corporate-ui'] },
    { components: ['scania-ui'] }
  ],
  srcDir: 'src',
  copy: [
    { src: 'angular.html' },
    { src: '../node_modules/angular/angular.js', dest: 'libs/angular.js' }
  ]
  /*collections: [
    { name: '@stencil/router' }
  ]*/
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
