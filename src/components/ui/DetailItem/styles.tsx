import { FC, PropsWithChildren } from 'react';

import { themePalette } from 'styles/colors';

interface DetailItemWrapperProps extends PropsWithChildren {
  image: string | null;
}

export const DetailItemWrapper: FC<DetailItemWrapperProps> = ({
  children,
  image,
}) => (
  <div
    className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-130px)] py-10"
    style={{
      backgroundImage: image ? `url(${image}?tr=h-960)` : undefined,
    }}
  >
    {/* eslint-disable-next-line react/no-unknown-property */}
    <style jsx>{`
      @media (min-width: 700px) {
        div {
          background-image: url(${image}?tr=w-900);
        }
      }
      @media (min-width: 1200px) {
        div {
          background-image: url(${image}?tr=w-2000);
        }
      }
    `}</style>
    {children}
  </div>
);

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <div className="py-10 bg-[#292929]">{children}</div>
);

interface ContentInterface {
  postType?: 'poetry' | 'other'; // Define `PostType` options as needed
}

export const Content: FC<PropsWithChildren<ContentInterface>> = ({
  children,
  postType,
}) => (
  <div
    className="
      max-w-full
      min-h-full
      p-5
      bg-[rgba(252,251,248,0.95)]
      md:max-w-[800px]
      md:mx-auto
      md:py-6
      md:px-10
      md:shadow-md
    "
    style={{
      boxShadow: postType ? `0 3px 4px 3px rgba(0, 0, 0, 0.14)` : undefined,
    }}
  >
    {/* eslint-disable-next-line react/no-unknown-property */}
    <style jsx>{`
      h1,
      h2,
      h3,
      h4,
      h6 {
        color: ${themePalette.primaryTitle};
        text-align: center;
      }

      h1 {
        font-size: 30px;
      }

      h2 {
        padding: 32px 0 20px;
        font-size: 26px;
        font-weight: 700;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 26px;
        margin: 0 0 20px;
        color: ${themePalette.primaryText};
        text-align: ${postType === 'poetry' ? 'center' : 'justify'};
      }

      p img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
      }

      blockquote,
      cite {
        position: relative;
        margin: 10px 0 10px 40px;
        color: ${themePalette.primaryText};
        font-style: italic;
      }

      blockquote::before,
      cite::before {
        content: '';
        position: absolute;
        left: -24px;
        top: 0;
        border-left: 4px solid #7c7c7c78;
        height: 100%;
      }

      .poetry-item__date {
        text-align: center;
        font-size: 14px;
        margin-bottom: 20px;
      }

      ul {
        margin: 0 0 20px;
      }

      ul li {
        position: relative;
        color: ${themePalette.primaryText};
        list-style: none;
        margin-bottom: 20px;
      }

      ul li::before {
        content: '';
        position: absolute;
        left: -20px;
        width: 4px;
        top: 0;
        border-left: 4px solid ${themePalette.listBorder};
        height: 100%;
      }
    `}</style>
    {children}
  </div>
);
