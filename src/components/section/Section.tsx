import { JSX, PropsWithChildren } from 'react';
import styles from './Section.module.scss';
import classNames from 'classnames';

export type SectionProps = PropsWithChildren<JSX.IntrinsicElements['section']>;

export const Section = ({ children, className, ...props }: SectionProps) => (
  <section className={classNames(styles.root, className)} {...props}>
    {children}
  </section>
);
