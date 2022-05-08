import { bootstrap } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

export const theme: Theme = {
  ...bootstrap,
  styles: {
    ...bootstrap.styles,
  },
  colors: {
    primary: '#0063cc',
    secondary: 'red',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderRadius: 0,
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      borderRadius: 0,
    },
  },
};
