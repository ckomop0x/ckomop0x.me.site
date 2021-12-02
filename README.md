[![Netlify Status](https://api.netlify.com/api/v1/badges/b694641f-f653-4ac4-91e1-ee0a804cf727/deploy-status)](https://app.netlify.com/sites/webtime-studio/deploys)
![Version](https://img.shields.io/badge/version-4.0.7-blue.svg?cacheSeconds=2592000)
[![codecov](https://codecov.io/gh/ckomop0x/ckomop0x.me.site.v2/branch/master/graph/badge.svg?token=ENO8W3HTIX)](https://codecov.io/gh/ckomop0x/ckomop0x.me.site.v2)

# Ckomop0x.me blog website

My personal blog website. It uses NextJS, Strapi, TypeScript, etc. and has many good optimisations under the hood.

**[https://ckomop0x.me](https://ckomop0x.me)**

## How it works

### Backend

I use Strapi as headless CMS and gather data via GraphQL.

### Frontend

For the client I use NextJS and Apollo, each deploy it gets the newest data via GraphqQL.
TypeScript types are generated during deployment. They are based on schema and queries.

For automatization, I use GitHub actions and Netlify deploy.
Strict policies allows deploying to `prod` only from `master` and it's possible to push to
`master` or merge PR only if tests are ✅passing and everything is `ok` with build/deploy
to Netlify.

## Technologies

- NextJS (website)
- TypeScript with automated types for data generation;
- Styled Components
- Apollo GraphQL
- Prettier / Husky / Git-hooks
- Eslint
- Lazy load images
- Jest

## Files structure

```
.github/                - github actions
.netlify/               - Netlify files
.vscode/                - VSCode files and recommended extensions
__mocks__/              - Jest mocks
src/                    – project files
static/                 – assets and static files
types                   - custom TypeScript types
.editorconfig           - base project formatting
.eslitrc.js             - JS liner setting
.gitignore              - files and folders ignored by Git
.graphqlconfig          - graphql schema config for WebStorm
.prettierignore         - files and folders ignored by prettier
.prettierrc             - prettier settings
apollo.config.js        - Apollo GraphQL cofig
index.js                - hm why do we need this file?
jest.config.js          - Jest config
jest-preprocess.js      - Jest babel-config
loadershim.js           - anther Jest config
netlify.toml            - Netlify settings
package.json            - project script and dependencies
README.md               - project description
site-config.js          - website base settings
tsconfig.json           - main TypeScript config
tsconfig.test.json      - TypeScript for tests
yarn.lock               - installed dependencies
```

## Install

```sh
yarn install
```

## Usage

```sh
yarn dev
```

## Run tests

```sh
yarn test
```

## Author

👤 **Pavel Klochkov, paul.klochkov@gmail.com**

- Website: https://webtime.studio
- Twitter: [https://twitter.com/ckomop0x](https://twitter.com/ckomop0x)
- Github: [https://github.com/ckomop0x](https://github.com/ckomop0x)
- LinkedIn: [https://linkedin.com/in/ckomop0x](https://linkedin.com/in/ckomop0x)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Pavel Klochkov, paul.klochkov@gmail.com](https://github.com/ckomop0x).

This project is [MIT](https://github.com/ckomop0x/ckomop0x.me.site.v2/blob/master/LICENSE) licensed.
