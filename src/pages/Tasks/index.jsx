import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import tasksServices from '../../services/tasks';

export default () => {

  const { idTodoList } = useParams();

  useEffect(() => {
    tasksServices.getAllTasksFromTodoList({ idTodoList }).then(response => {
      console.log(response.data);
    })
  }, [idTodoList]);

  return (
    <div>
      <h1>Tasks da todos</h1>
      <h2>{idTodoList}</h2>
    </div>
  );
};
