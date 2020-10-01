import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

export default () => {
  return (
    <>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/tasks/:idTodoList' component={Tasks} />
    </>
  );
};
