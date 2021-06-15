import parse from 'html-react-parser';
// import moment from 'moment';

import {
  ContentWrapper,
  FeaturedPostWrapper,
  LinkStyled,
  ItemImage,
} from './styles';

import {
  IndexPageQuery_featured_edges_node,
  IndexPageQuery_categories_edges,
} from 'pages/__generated__/IndexPageQuery';

interface IFeaturedPost {
  post: IndexPageQuery_featured_edges_node;
  categories: IndexPageQuery_categories_edges[];
}

export default function FeaturedPost({ post, categories }: IFeaturedPost) {
  const { title, excerpt, published, createdAt, slug, category, image_url } =
    post;
  const formattedDate = '';
  // moment(createdAt).format('DD.MM.YYYY');
  const categoryData = categories.filter(
    categoryItem => categoryItem.node.slug === category,
  )[0].node;
  const excerptText = excerpt
    ? parse(`<p>${excerpt.split('\n').join('</br>')}</p>`)
    : '';

  return (
    <>
      {published && (
        <FeaturedPostWrapper>
          <div className="col-12">
            <div className="row">
              <article className="wrapper col-12">
                <div className="row">
                  <ItemImage
                    className="col-12 col-sm-12 col-md-7"
                    background={image_url ?? ''}
                  >
                    <div className="item-image" />
                  </ItemImage>
                  <ContentWrapper className="col-12 col-sm-12 col-md-5">
                    <h3 className="title">{title}</h3>
                    <p className="post-date">Опубликовано: {formattedDate}</p>
                    {excerpt && category && (
                      <div className="post-text">
                        {excerptText}
                        <LinkStyled href={`/${categoryData.slug}/${slug}`}>
                          <a>Читать далее...</a>
                        </LinkStyled>
                      </div>
                    )}
                  </ContentWrapper>
                </div>
              </article>
            </div>
          </div>
        </FeaturedPostWrapper>
      )}
    </>
  );
}
