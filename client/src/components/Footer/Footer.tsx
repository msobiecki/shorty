import { ReactElement } from 'react';

import { Wrapper, Text } from './Footer.styled';

type FooterProps = {
  children?: string;
};

const Footer = ({ children }: FooterProps): ReactElement => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Footer;
