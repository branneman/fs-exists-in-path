# node-fs-exists-in-path

Async [fs.exists()](http://nodejs.org/api/fs.html#fs_fs_exists_path_callback) that walks the PATH environment variable.

NPM package can be found over here: [npmjs.org/package/node-fs-exists-in-path](https://npmjs.org/package/node-fs-exists-in-path)

## Install
```
npm install node-fs-exists-in-path
```

## Example usage
```js
var existsInPath = require('node-fs-exists-in-path');

existsInPath('grunt.cmd', function(exists) {
    if (exists) {
        console.log('grunt-cli seems to be installed on your windows box!');
    } else {
        console.log('No grunt-cli found! Install using: npm i grunt-cli -g');
    }
});
```
