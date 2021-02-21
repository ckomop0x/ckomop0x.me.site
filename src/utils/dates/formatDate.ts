import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

export default function formatDate(date: string): string {
  return format(new Date(date), 'dd MMMM yyyy', {
    locale: ruLocale,
  });
}
