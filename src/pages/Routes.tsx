import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthCallbackPage from './AuthCallbackPage';
import AuthPage from './AuthPage';
import HomePage from './HomePage';
import PostDetailPage from './PostDetailPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/auth/start">
          <AuthPage />
        </Route>
        <Route exact path="/posts/:postId">
          <PostDetailPage />
        </Route>
        <Route exact path="/callback/auth">
          <AuthCallbackPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
