import PostContent from './PostContent';
import { ItemWrapper, StyledLink } from './styles';

import { IndexPageQuery_categories } from 'queries/types/indexPageQuery';

export interface IPostProps {
  id: string | null;
  excerpt: string | null;
  publicationDate: string;
  title: string;
  slug: string | null;
  category: IndexPageQuery_categories;
  image: string;
  updateDate?: string;
}

const Post: React.FC<IPostProps> = ({
  publicationDate,
  title,
  slug,
  category,
  image,
}) => (
  <ItemWrapper className="col-12 col-md-6 col-lg-4">
    <StyledLink href={`/${category.slug}/${slug}`}>
      <a>
        <div className="row h-100">
          <PostContent
            image={image}
            title={title}
            publicationDate={publicationDate}
          />
        </div>
      </a>
    </StyledLink>
  </ItemWrapper>
);

export default Post;
