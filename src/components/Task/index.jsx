import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';
import tasksService from '../../services/tasks';

import { RowTask } from './style';

export default ({ task, updateStatusListTasks, deleteTaskList }) => {

  const handleChangeStatus = async (task) => {
    const status = !task.status;
    const id = task.id;
    const updateTask = await tasksService.updateTask({ id, status });
    updateStatusListTasks(updateTask.data);
  };

  const handleDeleteTask = async (task) => {
    const id = task.id;
    await tasksService.deleteTask({ id });
    deleteTaskList(task);
  }

  return (
    <RowTask>
      <Row className='align-items-center'>
        <Col xs={12} lg={1} className='text-center'>
          <button onClick={() => handleChangeStatus(task)}>
            {task.status ? (
              <FaCheckCircle size={52} color='#06406B' />
            ) : (
              <BsCircle size={52} color='#C6C6C6' />
            )}
          </button>
        </Col>
        <Col xs={12} lg={8}>
          <h3 className={task.status ? '' : 'color-black'}>{task.name}</h3>
        </Col>
        <Col xs={12} lg={2} className='text-right'>
          <h4 className={task.status ? '' : 'color-black'}>
            {task.dateFormat}
          </h4>
        </Col>
        <Col xs={12} lg={1}>
          {task.status ? (
            <FaTrashAlt size={20} color='#C6C6C6' />
          ) : (
            <button onClick={() => handleDeleteTask(task)}>
              <FaTrashAlt size={20} />
            </button>
          )}
        </Col>
      </Row>
    </RowTask>
  );
};
