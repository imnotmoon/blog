import type { Component } from 'solid-js';
import { GlobalStyles } from './App.styles';
import { Route, Router, Routes } from '@solidjs/router';
import { HomePage } from './components/home';
import { Layout } from './components/layout';

export const App: Component = () => (
  <Router>
    <GlobalStyles />
    <Layout>
      <Routes>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/bio">
          <div>bio page</div>
        </Route>
        <Route path="/article">
          <div>article</div>
        </Route>
      </Routes>
    </Layout>
  </Router>
);
