import {
  AvatarList,
  DefinitionList,
  FunctionalList,
  ListItem,
  ListItemAvatar,
  ListItemCheckbox,
  CheckboxList
} from '@acpaas-ui/react-components';
import { useState } from 'react';

export function ListExamples() {
  const [nameClicked, setNameClicked] = useState('');
  const [checked, setChecked] = useState('checkbox-1');
  return (
    <>
      <h1>Lists</h1>
      <h2>Definition</h2>
      <DefinitionList items={[{ term: 'This is', description: 'A definition list' }]} />
      <h2>Functional</h2>
      <p>Clicked on {nameClicked}</p>
      <FunctionalList onItemClick={setNameClicked} lined>
        <ListItem name="One" link={{ href: '#' }} iconLeft="mouse">
          1
        </ListItem>
        <ListItem name="Two">2</ListItem>
        <ListItem onClick={() => setNameClicked('OVERRIDEN')} name="Three" iconRight="arrow-right-1">
          3
        </ListItem>
      </FunctionalList>
      <h2>Avatar</h2>
      <AvatarList>
        <ListItemAvatar
          user={{ name: 'Albert Einstein' }}
          avatar={{ letter: 'AE' }}
          active
          iconRight="navigation-menu-horizontal"
        />
        <ListItemAvatar
          user={{ name: 'A dog', function: 'Dog', email: 'dog@antwerpen.be' }}
          avatar={{ image: 'https://placedog.net/100/100?r' }}
          iconRight="navigation-menu-horizontal"
        />
        <ListItemAvatar
          avatar={{ letter: 'IN' }}
          link={{ href: '#' }}
          user={{ name: 'Isaac Newton', email: 'isaac.newton@antwerpen.be' }}
          iconRight="navigation-menu-horizontal"
        />
      </AvatarList>

      <h2>Checkbox</h2>
      <CheckboxList>
        <ListItemCheckbox
          onClick={setChecked}
          name="checkbox-1"
          id="checkbox-1"
          label="First item"
          checked={checked === 'checkbox-1'}
        />
        <ListItemCheckbox
          onClick={setChecked}
          name="checkbox-2"
          id="checkbox-2"
          label="Second item"
          checked={checked === 'checkbox-2'}
        />
        <ListItemCheckbox
          onClick={setChecked}
          name="checkbox-3"
          id="checkbox-3"
          label="Third item"
          checked={checked === 'checkbox-3'}
        />
      </CheckboxList>
    </>
  );
}

export default ListExamples;
