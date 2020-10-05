import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Row, Col, Modal } from 'react-bootstrap';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import todoListService from '../../services/todolist';
import tasksServices from '../../services/tasks';
import Header from '../../components/Header';
import { ContainerTasks, FormTask } from './style';
import Task from '../../components/Task';
import { compareData } from '../../util';
import Loading from '../../components/Loading';

export default () => {
  const history = useHistory();
  const { idTodoList } = useParams();
  const [tasksTodoList, setTasksTodoList] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const nomeTask = useRef();
  const dateTask = useRef();

  const handleViewModal = (statusModal) => {
    setViewModal(!statusModal);
  };

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

  const handleSubmitTask = async (event) => {
    event.preventDefault();
    if (nomeTask.current.value.length < 2) {
      alert('Digite o nome da Task, mínimo de 2 caracteres.');
      nomeTask.current.focus();
    } else if (dateTask.current.value.length === 0) {
      alert('Selecione uma data limite da Task.');
      dateTask.current.focus();
    } else {
      const newTask = await tasksServices.createTask({
        idTodoList,
        name: nomeTask.current.value,
        date_limit: dateTask.current.value
      });
      const varTasksTodoList = tasksTodoList;
      const task = newTask.data;
      const newListTasks = [...varTasksTodoList.tasks, task];
      const orderAscDate = newListTasks.sort(compareData);
      varTasksTodoList.tasks = orderAscDate;
      setTasksTodoList(varTasksTodoList);
      handleViewModal(viewModal);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('@auth:unisal') || false;
    setTimeout(() => {
      if (!token) history.push('/');

      tasksServices.getAllTasksFromTodoList({ idTodoList }).then((response) => {
        setTasksTodoList(response.data);
      });

      setLoading(false);
    }, 3000);
  }, [history, idTodoList]);

  if (loading) return <Loading />;

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
          <button
            className='btn-add-task'
            onClick={() => handleViewModal(viewModal)}
          >
            <BsPlus size={32} color='#962B0D' />
          </button>
        </Col>
      </Row>

      <Modal show={viewModal} onHide={() => handleViewModal(viewModal)}>
        <FormTask onSubmit={handleSubmitTask} className='form-nova-task'>
          <Modal.Header closeButton>
            <Modal.Title>Criar item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <input
                  type='text'
                  name='nomeTask'
                  id='nomeTask'
                  required
                  placeholder='Nome do checklist'
                  ref={nomeTask}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type='date'
                  name='dataPrazo'
                  id='dataPrazo'
                  required
                  placeholder='Data prazo'
                  ref={dateTask}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <button type='submit'>Salvar</button>
              </Col>
            </Row>
          </Modal.Body>
        </FormTask>
      </Modal>
    </ContainerTasks>
  );
};
