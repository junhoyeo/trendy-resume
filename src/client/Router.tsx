import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';

export const Router: React.FC = () => (
  <HashRouter basename={window.location.pathname || ''}>
    <Route exact path="/" component={Home} />
  </HashRouter>
);

export default Router;
