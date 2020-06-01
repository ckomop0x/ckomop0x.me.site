import React from 'react';
import {
  ItemImage,
  ItemDateStyled,
  ItemContent,
  ItemTitle,
  TextStyled,
  ItemWrapper,
  Content,
} from './styles';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
// import parse from 'html-react-parser';

const Item = ({
  date,
  title,
  slug,
  category,
  id,
  extra,
  excerpt,
  image,
}: any) => {
  const backgroundImage = extra && extra.postimage;

  return (
    <ItemWrapper className="col-xs-12 col-md-6 col-4">
      <Content>
        <ItemContent>
          {image && (
            <img
              sizes={image?.childImageSharp?.sizes?.sizes}
              srcSet={image?.childImageSharp?.sizes?.srcSet}
              src={image?.childImageSharp?.sizes?.src}
              style={{ width: '100%' }}
              // src={image?.childImageSharp?.sizes?.tracedSVG}
            />
          )}
          <ItemTitle>{title}</ItemTitle>
          <ItemDateStyled>Опубликовано: {date}</ItemDateStyled>
          <TextStyled>
            {parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)}
            <Link to={`/${category.slug}/${slug}`}>Читать далее...</Link>
          </TextStyled>
        </ItemContent>
        {/*<ItemContent>*/}
        {/*  <ItemImage background={backgroundImage} />*/}
        {/*</ItemContent>*/}
      </Content>
    </ItemWrapper>
  );
};

export default Item;
