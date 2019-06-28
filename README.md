# React Configuration

Configuration for a react app.

Uses Webpack 4, Babel 7

## Quick Overview
* `git clone --depth 1` this repository to get started.
* `npm install` to install needed dependencies.
* `npm start` to start the application on port 3002
* `npm build` to build the application.

You can replace these with their `yarn` counterparts, if you prefer. 

## Features
* ### [POSTCSS Plugins](http://postcss.org/)
  * [Preset ENV CSS](https://preset-env.cssdb.org)
    
    Write future CSS today. Better than using Preprocessors like SASS or LESS because it's pure CSS that you learn. 

    Comes with *autoprefixer* for your styles. 
  
  * [Stylelint](https://stylelint.io/)

    Get a whole lot better stylelinting than ESLint. 
    
    Follows https://github.com/stylelint/stylelint-config-standard for linting. 
    Turn rules on or off from `.stylelintrc.json` file.

  * [PostCSS Normalize](https://www.npmjs.com/package/postcss-normalize)

    Normalize stylesheets based on browser support for browserlist.

* ### [ESLint](https://eslint.org)
  Follows [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript). You can turn rules on or off from `.eslintrc.json`. You can choose to ignore files on whole from `.eslintignore`

  Note: ESLint has it's style formatting options turned off by default, because it is handled by `Prettier` later on. 

* ### [Babel](https://babeljs.io/)
  Used to compile your modern javascript to es2015 compatible javascript. 
  You can change the configuration with .babelrc file. 

* ### [Prettier](https://github.com/prettier/prettier)
  Formats code in place, so you don't have to learn the styling rules. 

* ### [UglifyJS](https://github.com/mishoo/UglifyJS2)
  Used to minify, mangle and compress javascript code. 
  Used only during production.

* ### [Workbox](https://developers.google.com/web/tools/workbox)
  Generates an optimised service worker with support for precaching and offline loading.

* ### Unit Testing
  Unit testing setup using [Jest](https://facebook.github.io/jest/). Shallow rendering support with [Enzyme](http://airbnb.io/enzyme/)
  
## Other enhancements
1. Code split into `vendor.js` and hashed javascript filenames. 
This helps in pushing new code without worrying about caching issues.
2. Webpack automatically looks for and installs plugins that are not installed by default.  
Just import the required library and let webpack worry about installing it. 

    https://github.com/webpack-contrib/npm-install-webpack-plugin
3. Extracts CSS to a new file and minifies it.
    
    https://github.com/webpack-contrib/extract-text-webpack-plugin

4. Minifies react and react-dom packages.

    https://facebook.github.io/react/docs/optimizing-performance.html#webpack
5. Removes debugging consoles for Production build



_Feel free to throw in a pull request._ 



