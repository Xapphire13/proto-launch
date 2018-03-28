# proto-launch
Small tool to host javascript prototypes on a local server.

## Installation
```sh
npm install --save-dev proto-launch
```

## Usage
In your `package.json` add the following to `scripts`:

```json
"scripts": {
  "launch": "proto-launch"
},
```

After executing `npm run launch`, a URL to your prototype will be printed to the command line.

## Configuration
Currently `proto-launch` isn't configurable, it simply launches a small website with a webpage wrapping the script pointed to by `main` in your `package.json`.

In the future I may add Webpack support to save you from having to bundle your project beforehand (contributions before I get to this are more than welcome).
