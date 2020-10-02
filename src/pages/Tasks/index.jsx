import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import todoListService from '../../services/todolist';
import tasksServices from '../../services/tasks';
import Header from '../../components/Header';
import { ContainerTasks } from './style';
import Task from '../../components/Task';

export default () => {
  const history = useHistory();
  const { idTodoList } = useParams();
  const [tasksTodoList, setTasksTodoList] = useState({});

  const handleDeleteTodoList = async ({ id }) => {
    try {
      await todoListService.deleteTodoList(id);
      history.push('/home');
    } catch (error) {
      alert('Erro ao deletar TodoList, tente novamente mais tarde!');
    }
  };

  const updateStatusListTasks = (taskUpdate) => {
    const tasksTodoListUpdate = tasksTodoList.tasks.map((task) => {
      if (task.id === taskUpdate.id) return { ...taskUpdate };
      else return { ...task };
    });
    setTasksTodoList({
      ...tasksTodoList,
      tasks: tasksTodoListUpdate
    });
  };

  const deleteTaskList = (taskDelete) => {
    const tasksTodoListUpdate = tasksTodoList.tasks.filter(
      (task) => task.id !== taskDelete.id
    );

    setTasksTodoList({
      ...tasksTodoList,
      tasks: tasksTodoListUpdate
    });
  };

  useEffect(() => {
    tasksServices.getAllTasksFromTodoList({ idTodoList }).then((response) => {
      setTasksTodoList(response.data);
    });
  }, [idTodoList]);

  return (
    <ContainerTasks>
      <Header showExit alignLogo='center' />
      <Row className='align-items-center mt-5'>
        <Col xs={12} lg={1}>
          <div className='icon-back'>
            <Link to='/home'>
              <FaArrowLeft size={24} />
            </Link>
          </div>
        </Col>
        <Col xs={12} lg={11}>
          <div className='title-todolist'>
            <h2>
              {tasksTodoList.todoList ? tasksTodoList.todoList.name : '...'}
            </h2>
            <div className='todolist-delete'>
              <button
                onClick={() =>
                  handleDeleteTodoList({ id: tasksTodoList.todoList.id })
                }
              >
                <FaTrashAlt size={24} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
      {tasksTodoList.tasks
        ? tasksTodoList.tasks.map((task) => (
            <Row key={task.id}>
              <Col>
                <Task
                  task={{ ...task }}
                  updateStatusListTasks={updateStatusListTasks}
                  deleteTaskList={deleteTaskList}
                />
              </Col>
            </Row>
          ))
        : ''}
      <Row className='mt-5 mb-5'>
        <Col className='text-center'>
          <button className='btn-add-task'>
            <BsPlus size={32} color='#962B0D' />
          </button>
        </Col>
      </Row>
    </ContainerTasks>
  );
};
