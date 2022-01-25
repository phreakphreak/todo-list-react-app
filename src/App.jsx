import React from 'react';
import { Route, Router } from 'wouter';
import './App.css';
import AppLayout from './components/AppLayout';
import { useHashLocation } from './hooks';
import { About, Home } from './pages';

const App = () => {
  return (
    <Router hook={useHashLocation}>
      <AppLayout>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </AppLayout>
    </Router>
  );
};

export default App;
