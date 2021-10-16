import { ReactElement } from 'react';

import { Wrapper } from './Header.styled';

type HeaderProps = {
  children?: ReactElement | ReactElement[] | string;
};

const Header = ({ children }: HeaderProps): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
