import React from 'react';
import {
  ItemImage,
  ItemDateStyled,
  ItemContent,
  ItemTitle,
  TextStyled,
  Wrapper,
  Content,
} from './styles';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
// import parse from 'html-react-parser';

const Item = ({ date, title, slug, category, id, extra, excerpt }: any) => {
  const backgroundImage = extra && extra.postimage;

  return (
    <Wrapper>
      <Content>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDateStyled>Опубликовано: {date}</ItemDateStyled>
          <TextStyled>
            {parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)}
          </TextStyled>
          <Link to={`/${category.slug}/${slug}`}>Читать далее...</Link>
        </ItemContent>
        {/*<ItemContent>*/}
        {/*  <ItemImage background={backgroundImage} />*/}
        {/*</ItemContent>*/}

      </Content>
    </Wrapper>
  );
};

export default Item;
