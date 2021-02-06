import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';

import {
  IndexPageQuery_categories_edges,
  IndexPageQuery_poetry_edges,
} from '../../../pages/__generated__/IndexPageQuery';

import Post from './Post';
import { PostsListStyled, AllPostsLink } from './styles';

import { TitleBlock, SubtitleBlock } from 'styles/Typography';

interface IPostsList {
  blockTitle: string;
  blockSubtitle: string;
  items: IndexPageQuery_poetry_edges[];
  categories: IndexPageQuery_categories_edges[];
}

const PostsList: React.FC<IPostsList> = ({
  blockTitle,
  blockSubtitle,
  items,
  categories,
}) => {
  const postsCategoryLink = items[0].node.category ?? '';
  const [postsCategory] = categories.filter(
    (category: any) => category.node.slug === postsCategoryLink,
  );

  return (
    <section style={{ padding: '0 0 80px' }}>
      <div className="container">
        <TitleBlock>{blockTitle}</TitleBlock>
        <SubtitleBlock>{blockSubtitle}</SubtitleBlock>
        <div className="text-center">
          <PostsListStyled className="row">
            {items.map(({ node }: any) => {
              const {
                strapiId,
                title,
                excerpt,
                published,
                createdAt,
                slug,
                category,
                image_url,
              } = node;
              // const formattedDate = moment(createdAt).format('DD.MM.YYYY');
              const publicationDate = format(
                new Date(createdAt),
                'dd MMMM yyyy',
                {
                  locale: ruLocale,
                },
              );
              const categoryData = categories.filter(
                (categoryItem: any) => categoryItem.node.slug === category,
              )[0].node;

              return (
                published && (
                  <Post
                    key={strapiId}
                    id={strapiId}
                    excerpt={excerpt}
                    publicationDate={publicationDate}
                    title={title}
                    slug={slug}
                    category={categoryData}
                    image={image_url}
                  />
                )
              );
            })}
          </PostsListStyled>
          <AllPostsLink to={postsCategoryLink}>
            Перейти в {postsCategory.node.name}
          </AllPostsLink>
        </div>
      </div>
    </section>
  );
};

export default PostsList;
