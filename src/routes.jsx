import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

export default () => {
  return (
    <>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />
    </>
  );
};
