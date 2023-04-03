import { ParentComponent } from 'solid-js';
import { Header } from '../header';

export const Layout: ParentComponent = (props) => (
  <div>
    <Header />
    <div>{props.children}</div>
    <div>Footer</div>
  </div>
);
