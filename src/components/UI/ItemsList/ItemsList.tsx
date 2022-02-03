import Post from 'components/UI/Post';
import formatDate from 'utils/dates/formatDate';

interface IItemsList {
  items: any[];
  categories: any[];
}

export default function ItemsList({ items, categories }: IItemsList) {
  return (
    <div className="row">
      {items.map(
        ({
          id,
          title,
          excerpt,
          published,
          date,
          updated_at,
          slug,
          category,
          image_url,
        }: any) => {
          const publicationDate = formatDate(date);
          const updateDate = formatDate(updated_at);
          const [categoryData] = categories.filter(
            (categoryItem: any) => categoryItem.slug === category,
          );

          return (
            published && (
              <Post
                key={id}
                id={id}
                excerpt={excerpt}
                publicationDate={publicationDate}
                updateDate={updateDate}
                title={title || ''}
                slug={slug}
                category={categoryData}
                image={image_url || ''}
              />
            )
          );
        },
      )}
    </div>
  );
}
