# JSON Crew

![badge](https://action-badges.now.sh/agneym/json-formatter)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3748ee21-7ff9-434c-b59b-64ad757e72e5/deploy-status)](https://app.netlify.com/sites/jsoncrew/deploys)
<a href="https://prettier.io">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)

An in-place JSON Viewer, Formatter and Transformer.

## Features

1. JSON Viewer
2. JSON Formatting with options.
3. JSON Validation according to schemas
4. Supports Plugins to extend Functionality.

## How to create a JC Plugin

JSON Crew Plugin system is based on Web Components.

It gives the JSON data entered by the user as input to the web component and allows it to render the UI for plugin area. From here, you can transform the JSON and emit a custom event `json-transform` with transformed JSON as the transformation response.

1. Web Component gets `data` as input
2. Render UI and allow user to configure the transformation
3. Emit a custom event `json-transform` to show the transformed JSON to the user.
4. Give me a PR editing the [listing file](https://github.com/agneym/json-formatter/blob/master/src/components/Plugins/pluginDir.js)

[Tutorial Blog](https://dev.to/boywithsilverwings/creating-a-json-crew-plugin-2l55)

A Starting Template with [Lit Element](https://lit-element.polymer-project.org) can be found [here](https://github.com/agneym/jc-json-utils)

## Contributing

```
npm install
npm start
```

Development server started at http://localhost:3000.

For more details, view [Contributing Guidelines](.github/CONTRIBUTING.md)
