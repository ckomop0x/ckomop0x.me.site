import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver, htmlSerializer } from '@utils/prismic';

export default ({ slice }) => (
  <div className="post-text container">
    <div>
      {RichText.render(slice.primary.text, linkResolver, htmlSerializer)}
    </div>
  </div>
);
