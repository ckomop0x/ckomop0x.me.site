import moment from 'moment';
import React from 'react';

import Post from './Post';
import { PostsListStyled, AllPostsLink } from './styles';

import { TitleBlock, SubtitleBlock } from 'styles/Typography';

const PostsList: React.FC<any> = ({
  blockTitle,
  blockSubtitle,
  items,
  categories,
}) => {
  const postsCategoryLink = items[0].node.category;
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
                date,
                title,
                excerpt,
                published,
                createdAt,
                featured,
                updatedAt,
                slug,
                extra,
                category,
                image_url,
              } = node;
              const formattedDate = moment(createdAt).format('DD.MM.YYYY');
              const categoryData = categories.filter(
                (categoryItem: any) => categoryItem.node.slug === category,
              )[0].node;

              return (
                published && (
                  <Post
                    key={strapiId}
                    id={strapiId}
                    excerpt={excerpt}
                    date={formattedDate}
                    title={title}
                    slug={slug}
                    extra={extra}
                    featured={featured}
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
