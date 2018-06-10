const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-elements-example/runtime.js',
    './dist/angular-elements-example/polyfills.js',
    './dist/angular-elements-example/scripts.js',
    './dist/angular-elements-example/main.js',
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/aee.js');

  await fs.copyFile('./dist/angular-elements-example/styles.css', 'elements/styles.css');

})();
