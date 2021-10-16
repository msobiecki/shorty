import { ReactElement } from 'react';
import { Wrapper } from './Content.styled';

type ContentProps = {
  children?: ReactElement | ReactElement[] | string;
};

const Content = ({ children }: ContentProps): ReactElement => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
