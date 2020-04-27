import { Date } from 'prismic-reactjs';

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  month: 'long',
  year: 'numeric',
});
const formatPostDate = (date: any) => dateFormatter.format(Date(date));

export default formatPostDate;
