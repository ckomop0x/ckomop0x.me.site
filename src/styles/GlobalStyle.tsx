import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      * {
        font-family: Ubuntu, sans-serif;
      }

      p {
        color: #5d443c;
      }

      body,
      html {
        padding: 0;
        color: #999;
        min-height: 100%;
      }

      body {
        .light {
          background-color: #f0ebde;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #312420;
        font-family: Neucha, Ubuntu, Helvetica, Arial, sans-serif;
      }

      .content-section {
        margin: 32px 0;
      }

      .h-100 {
        height: 100%;
      }
    `}
  />
);

