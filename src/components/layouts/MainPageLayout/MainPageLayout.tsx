import BaseLayout from '../../shared/layouts/BaseLayout';
import { IBaseLayoutProps } from '../../shared/layouts/BaseLayout/BaseLayout';

type IMainPageLayoutProps = IBaseLayoutProps;

export default function MainPageLayout({
  children,
}: IMainPageLayoutProps): JSX.Element {
  return <BaseLayout>{children}</BaseLayout>;
}
