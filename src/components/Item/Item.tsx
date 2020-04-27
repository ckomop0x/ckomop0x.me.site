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
// import parse from 'html-react-parser';

const Item = ({ date, title, slug, category, id, extra, excerpt }: any) => {
  const backgroundImage = extra && extra.postimage;

  return (
    <Wrapper>
      <Link to={`/${category}/${slug}---${id}`}>
        <a>
          <Content>
            <ItemContent>
              <ItemTitle>{title}</ItemTitle>
              <TextStyled dangerouslySetInnerHTML={{ __html: excerpt }} />
              <ItemDateStyled>Опубликовано: {date}</ItemDateStyled>
            </ItemContent>
            <ItemContent>
              <ItemImage background={backgroundImage} />
            </ItemContent>
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Item;
