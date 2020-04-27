declare module 'prismic-richtext' {
  const Elements: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    heading5: string;
    heading6: string;
    paragraph: string;
    preformatted: string;
    strong: string;
    em: string;
    'list-item': string;
    'o-list-item': string;
    'group-list-item': string;
    'group-o-list-item': string;
    image: string;
    embed: string;
    hyperlink: string;
    label: string;
    span: string;
  };
}

declare module 'prismic-reactjs' {
  export const RichText: any;
  export const Date: any;
  export const Link: any;
}
