import { ParentComponentFrom } from '../utils';
import { Root } from './Button.styles';

export const Button: ParentComponentFrom<HTMLButtonElement> = (props) => (
  <Root {...props}>{props.children}</Root>
);
