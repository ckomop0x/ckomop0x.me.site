import { format } from 'date-fns/format';
import { ru } from 'date-fns/locale';

export default function formatDate(date: string | Date): string {
  return format(new Date(date), 'dd MMMM yyyy', {
    locale: ru,
  });
}
