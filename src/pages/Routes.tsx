import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import PostDetailPage from './PostDetailPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/posts/:postId">
          <PostDetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
