import { JSX, PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

export type ContainerProps = PropsWithChildren<JSX.IntrinsicElements['div']>;

export const Container = ({ className, children, ...props }: ContainerProps) => (
  <div className={classNames(styles.root, className)} {...props}>
    {children}
  </div>
);
