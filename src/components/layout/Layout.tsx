import { Header } from '../header';
import { Root, Body } from './Layout.styles';
import { Footer } from '../footer';
import { ParentComponent } from 'solid-js';

export const Layout: ParentComponent = (props) => (
  <Root>
    <Header />
    <Body>{props.children}</Body>
    <Footer />
  </Root>
);
