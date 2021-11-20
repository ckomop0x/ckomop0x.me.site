import { Navbar } from './styles';

import Logo from 'components/shared/Nav/Logo';
import TopMenu from 'components/shared/Nav/TopMenu';

export interface INavProps {
  isInner?: boolean;
}

export default function Nav({ isInner }: INavProps): JSX.Element {
  return (
    <Navbar className="container" isInner={isInner}>
      <Logo imgSrc="/images/apple-icon.png" title="Павел Клочков" linkSrc="/" />
      <TopMenu />
    </Navbar>
  );
}
