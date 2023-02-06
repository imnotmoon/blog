import type { Component } from 'solid-js';
import { GlobalStyles } from './App.styles';
import { Route, Router, Routes } from '@solidjs/router';
import { HomePage } from './components/home';

export const App: Component = () => (
  <Router>
    <GlobalStyles />
    <Routes>
      <Route path="/">
        <HomePage />
      </Route>
    </Routes>
  </Router>
);
