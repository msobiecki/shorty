import { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { Wrapper, Button } from './Menu.styled';

const Menu = (): ReactElement => {
  const history = useHistory();
  const intl = useIntl();

  const renderButtons = (buttons: { text: string; onClick: () => void }[]) =>
    buttons.map(({ text, onClick }, key) => (
      <Button key={key} onClick={onClick}>
        {text}
      </Button>
    ));

  return (
    <Wrapper>
      {renderButtons([
        {
          text: intl.formatMessage({ id: 'MENU_HOME' }),
          onClick: () => {
            history.push('/');
          },
        },
        {
          text: intl.formatMessage({ id: 'MENU_SEARCH' }),
          onClick: () => {
            history.push('/search');
          },
        },
      ])}
    </Wrapper>
  );
};

export default Menu;
