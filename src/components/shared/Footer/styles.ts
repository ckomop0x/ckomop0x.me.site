import styled from 'styled-components';

import { themePalette } from 'styles/colors';

export const FooterWrapper = styled.footer`
  margin: auto 0;
  background: hsla(38, 20%, 80%, 1);
  color: ${themePalette.primaryTitle};
  padding: 32px 0;

  .copyright {
    font-size: 16px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .version {
    font-size: 14px;
    display: flex;
    padding: 0;
    margin: 0;
    flex-direction: column;
    align-items: center;
  }
`;
