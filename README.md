# Front-End Developer Challenge

## Features

- `Webpack` - development process and production build
- `React` - JS framework for SPA
- `Typescript` - typing
- `Styled-components` - styling
- `Prettier` - code format
- `Eslint` - code analyzer

## Local setup

Requirements: `node 16.15.0`

From root:

- `npm install`
- `npm run dev` - starts local dev server with live reloading on `localhost:8080`
- `npm run lint` - analyzes code to find potential problems

## Build for production

From root:

- `npm run build` - builds production version of application in `dist/` directory. Prod verison will be build only if linter succeed.

Production build consist of:

- `index.html` - entry file
- `index.js` - bundled and minified script
- `public/` - public directory including all static assets like images
