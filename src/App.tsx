import type { Component } from 'solid-js';
import { GlobalStyles } from './App.styles';
import { Route, Router, Routes } from '@solidjs/router';
import { HomePage } from './components/home';
import { Layout } from './components/layout';
import { BioPage } from './components/bio';
import { ArticlePage } from './components/article';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

const queryClient = new QueryClient();
export const App: Component = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/bio" component={BioPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/" component={HomePage} />
        </Routes>
      </Layout>
    </Router>
  </QueryClientProvider>
);
