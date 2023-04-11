import { ParentComponent } from 'solid-js';
import { Header } from '../header';
import { Root } from './Layout.styles';
import { Footer } from '../footer';

export const Layout: ParentComponent = (props) => (
  <Root>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </Root>
);
