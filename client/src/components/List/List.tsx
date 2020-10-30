import React from "react";

import { Wrapper, ListBox, ListItem, ListItemText, ListItemSecondaryAction, Button } from "./List.styled";

type ListProps = {
  items: ListItemProps[];
}

type ListItemProps = {
  primary?: JSX.Element | string;
  secondary?: JSX.Element | string;
  button?: JSX.Element | string;
  onClick?: () => void;
}

const List = ({items} : ListProps) => {
  return (
    <Wrapper>
      { items.length > 0
        ?
          <ListBox>
            {items.map(({primary, secondary, button, onClick}: ListItemProps, key) => 
              <ListItem key={key} button={false}>
                <ListItemText primary={primary} secondary={secondary}/>
                <ListItemSecondaryAction>
                  <Button onClick={onClick}>{button}</Button>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </ListBox>
        :
          null
      }
    </Wrapper>
  );
};

export default List;
