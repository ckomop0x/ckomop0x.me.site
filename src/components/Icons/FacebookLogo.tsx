import React from 'react';

import { IIcon } from './types';

const FacebookLogoIcon: React.FC<IIcon> = ({
  title = 'WebUrlIcon',
  titleId = 'WebUrlIcon',
}) => (
  <svg width={30} height={30} viewBox="0 0 30 30">
    <defs>
      <style>
        {`
          #prefix__Path_103,
          #prefix__Rectangle_55 {
          transition: .3s ease;
        }
      `}
      </style>
      <clipPath id="prefix__clip-path">
        <path
          id="prefix__Rectangle_55"
          d="M0 0h30v30H0z"
          stroke="red"
          fill="#fff"
        />
      </clipPath>
    </defs>
    <title id={titleId}>{title}</title>
    <g id="prefix__Mask_Group_19">
      <g id="prefix__facebook-logo-button">
        <g id="prefix__Group_71">
          <path
            id="prefix__Path_103"
            d="M15 0a15 15 0 1015 15A15.017 15.017 0 0015 0zm3.73 15.528h-2.44v8.7h-3.616v-8.7h-1.719v-3.074h1.719v-1.989a3.391 3.391 0 013.649-3.649l2.68.01V9.81h-1.945a.736.736 0 00-.767.837v1.807h2.755z"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default React.memo(FacebookLogoIcon);
