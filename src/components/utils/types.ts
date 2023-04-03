import { Component, JSX, ParentComponent } from 'solid-js';
import HTMLAttributes = JSX.HTMLAttributes;

export type ComponentFrom<T = HTMLDivElement> = Component<HTMLAttributes<T>>;
export type ParentComponentFrom<T = HTMLDivElement> = ParentComponent<HTMLAttributes<T>>;
