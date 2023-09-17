# Front-End Developer Challenge

## TODO

- COUNTER
- finish and check Readme
- save state in localstorage
- reafactor global context types,
- refaktor buyTalentPoint removeTalentPoint. create findPath, findIcon methods
- move canBuyTalentPoint into buyTalentPoint
- RWD
- active talent animation
- icons size to theme

Features:

- TODO
- TODO

## Local setup

From root:

- `npm install`
- `npm run dev` - starts local dev server with live reloading on `localhost:8080`
- `npm run lint` - analyzes code to find potential problems

## Build for production

From root:

- `npm run build` - builds production version of application in `dist/` directory. Prod verison will be build only if linter succeed.

Production build consist of:

- `index.html` - entry file
- `index.js` - bundled and minified js scripts included at the end of `body` section
- `public/` - public directory including all static assets like images
