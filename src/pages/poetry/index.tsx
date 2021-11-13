import PoetryLayout from 'components/layouts/PoetryLayout';
import ItemsList from 'components/shared/ItemsList';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { ICategoryPageProps } from 'types/categoryPage';
import apolloClient from 'utils/api/apollo-client';

export default function PoetryPage({
  items,
  categories,
}: ICategoryPageProps): JSX.Element {
  return (
    <PoetryLayout
      headTitle="Ckomop0x.me | Стихи и песни"
      ogUrl="https://ckomop0x.me/poetry/"
      ogDescription="Ckomop0x.me | Стихи и песни"
      twitterCard="Стихи и песни написанные в разное время, в разных городах и странах"
    >
      <div className="container">
        <TitleBlock>Стихи и песни</TitleBlock>
        <SubtitleBlock>
          Стихи и песни написанные в разное время, в разных городах и странах
        </SubtitleBlock>
        {items ? (
          <ItemsList items={items} categories={categories} />
        ) : (
          'Здесь ещё ничего нет или что-то пошло не так. 😎'
        )}
      </div>
    </PoetryLayout>
  );
}

export async function getStaticProps(): Promise<any> {
  const {
    data: { posts: items, categories },
  } = await apolloClient.query({
    query: categoryPageQuery,
    variables: {
      category: 'poetry',
      limit: 100,
    },
  });

  return {
    props: {
      items,
      categories,
    },
  };
}
