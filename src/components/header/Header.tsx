import { Root, Body, Footer } from './Header.styles';
import { Button } from '../button/Button';
import { JSX } from 'solid-js';

export const Header = () => {
  const onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = () => {
    console.log('clicked');
  };
  return (
    <Root>
      <div>
        <h3>imnotmoon</h3>
      </div>
      <Body>
        <li>home</li>
        <li>bio</li>
        <li>articles</li>
      </Body>
      <Footer>
        <Button onClick={onClick}>Search</Button>
      </Footer>
    </Root>
  );
};
