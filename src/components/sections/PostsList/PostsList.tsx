import React from 'react';
import moment from 'moment';
import { Post } from './components';
import { PostsListStyled } from './styles';

const PostsList: React.FC<any> = (props) => {
  console.log(props);

  return (
    <PostsListStyled className="row">
      {props.items.map(({ node }: any) => {
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
        const categoryData = props.categories.filter(
          (categoryItem: any) => categoryItem.node.slug === category
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
  );
};

export default PostsList;
