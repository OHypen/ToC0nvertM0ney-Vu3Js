SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.vue': {
      'loader': 'vue-loader'
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'vue-loader': 'systemjs-vue-loader@latest',
    'vue': 'vue@latest/dist/vue.js',
    'vue-template-compiler': 'vue-template-compiler@latest'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/main.js')
  .catch(console.error.bind(console));