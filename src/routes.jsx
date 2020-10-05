import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import PageNotFound from './pages/PageNotFound';

export default () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/tasks/:idTodoList' component={Tasks} />

      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
