import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';

const loadModule = (cb) => {
  return module => cb(null, module.default);
}

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'page1',
      getComponent(location, cb) {
        import('./components/page1')
          .then(loadModule(cb));
      }
    }, 
  ]
}

const Routes = () => {
  return (
    <Router history={browserHistory} routes={componentRoutes} />
  );
}

export default Routes;