import type { Component } from 'solid-js';
import { GlobalStyles } from './App.styles';
import { Header } from './components/header';

export const App: Component = () => (
  <>
    <GlobalStyles />
    <div>
      <Header />
    </div>
  </>
);
