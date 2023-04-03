import { Root, Body, Footer } from './Header.styles';
import { Button } from '../button/Button';
import { JSX } from 'solid-js';
import { NavLink } from '@solidjs/router';

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
        <li>
          <NavLink href="/">home</NavLink>
        </li>
        <li>
          <NavLink href="/bio">bio</NavLink>
        </li>
        <li>
          <NavLink href="/article">article</NavLink>
        </li>
      </Body>
      <Footer>
        <Button onClick={onClick}>Search</Button>
      </Footer>
    </Root>
  );
};
