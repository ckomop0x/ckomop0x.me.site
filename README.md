[![Netlify Status](https://api.netlify.com/api/v1/badges/b694641f-f653-4ac4-91e1-ee0a804cf727/deploy-status)](https://app.netlify.com/sites/webtime-studio/deploys)
![Version](https://img.shields.io/badge/version-2.3.5-blue.svg?cacheSeconds=2592000)

# Pavel Klochkov @ckomop0x blog website

My personal blog website. It uses Gatsby, Strapi, TypeScript, etc. and has many good optimisations under the hood.

**[https://ckomop0x.me](https://ckomop0x.me)**

## How it works

### Backend
I use Strapi as headless CMS. It's hosted on Heroku and connected to MongoDB on MongoDB atlas. It allows to have cloud-based infrastructure with a free-tier enough big for the personal blog. 

### Frontend
For client-side part I use Gatsby, which is hosted on Netlify. Each deploy it gets the newest data and even can be redeployed with updated data. It's possible with webhook trigger connected from Strapi to Netlify. For automatisation I've connected GitHub actions and strict deploy policy – only from master if test deploy and tests are ✅passing.

## Technologies

- Gatsby
- TypeScript with automated types for data generation; 
- Styled Components
- GraphQL
- Prettier / Husky / Git-hooks
- Eslint
- Apollo
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
gatsby-config.js        - Gatsby config
gatsby-node.js          - Gatsby SSR page-generation
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
