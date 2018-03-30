# proto-launch

[![Greenkeeper badge](https://badges.greenkeeper.io/Xapphire13/proto-launch.svg)](https://greenkeeper.io/)
Small tool to host javascript prototypes on a local server.

## Installation
```sh
npm install -g proto-launch
```

Optionally, you can install `proto-launch` locally.
```sh
npm install --save-dev proto-launch
```

## Usage
From within your project, simply run `proto-launch` and a URL to your prototype will be printed to the command line.

e.g.
> Project live at http://127.0.0.1:36990

If you have installed locally, in your `package.json` you can refer to `proto-launch` in your package scripts, example:

```json
"scripts": {
  "launch": "proto-launch"
},
```

## Configuration
Currently `proto-launch` isn't configurable, it simply launches a small website with a webpage wrapping the script pointed to by `main` in your `package.json`.

In the future I may add Webpack support to save you from having to bundle your project beforehand (contributions before I get to this are more than welcome).
