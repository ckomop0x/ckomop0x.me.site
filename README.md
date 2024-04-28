[![codecov](https://codecov.io/gh/ckomop0x/ckomop0x.me.site.v2/branch/master/graph/badge.svg?token=ENO8W3HTIX)](https://codecov.io/gh/ckomop0x/ckomop0x.me.site.v2)

# Ckomop0x.me blog website

Personal blog website. It uses NextJS, Strapi, TypeScript, GraphQL and other technologies. It has many good optimisations under the hood.

**[https://ckomop0x.me](https://ckomop0x.me)**

## How it works

### Backend

I use Strapi as a headless CMS and gather data via GraphQL.

### Frontend

For the client, I use NextJS and Apollo. Each deployment gets the newest data via GraphqQL.
TypeScript types are generated during deployment. They are based on schema and queries.

For automatization, I use GitHub actions and Netlify deploy.
Strict policies allow deploying to `prod` only from `master`, and it's possible to push to
`master` or merge PR only if tests are ✅ passing and everything is `ok` with build/deploy
to Vercel.

## Technologies

- NextJS (website)
- TypeScript with automated types for data generation;
- Styled Components
- Apollo GraphQL
- Prettier / Husky / Git-hooks
- Eslint
- Lazy load images
- Jest

## Install

```sh
npm i
```

## Usage

```sh
npm run dev
```

## Run tests

```sh
npm run test
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

Copyright © 2024 [Pavel Klochkov, paul.klochkov@gmail.com](https://github.com/ckomop0x).

This project is [MIT](https://github.com/ckomop0x/ckomop0x.me.site.v2/blob/master/LICENSE) licensed.
