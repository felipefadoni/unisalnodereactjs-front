import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import Loading from '../../components/Loading';

import todoListService from '../../services/todolist';
import { compareData } from '../../util';

import Header from '../../components/Header';
import { ContainerHome, RowTodoList } from './style';

export default () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [nameChecklist, setNameChecklist] = useState('');
  const [dateChecklist, setDateChecklist] = useState('');
  const [listTodoList, setTodoList] = useState([]);

  const handleGetTodoList = () => {
    todoListService.getAllTodoList().then((response) => {
      const sortObject = response.data.sort(compareData);
      setTodoList(sortObject);
    });
  };

  const handleSubmitNewChecklist = async (event) => {
    event.preventDefault();
    try {
      const createTodoList = await todoListService.create({
        name: nameChecklist,
        date_limit: dateChecklist
      });

      if (createTodoList.status === 201) {
        const todoListCreated = createTodoList.data;
        const newTodoList = [...listTodoList, todoListCreated];
        const sortObject = newTodoList.sort(compareData);
        setTodoList(sortObject);
        setNameChecklist('');
        setDateChecklist('');
      }
    } catch (error) {
      alert(error.message);
      setNameChecklist('');
      setDateChecklist('');
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('@auth:unisal') || false;
    setTimeout(() => {
      if (!token) history.push('/');
      setLoading(false);
      handleGetTodoList();
    }, 3000);
  }, [history]);

  if (loading) return <Loading />;

  return (
    <ContainerHome>
      <Header showExit alignLogo='center' />
      <h2>Criar um todolist</h2>
      <form autoComplete='off' onSubmit={handleSubmitNewChecklist}>
        <Row>
          <Col xs={12} lg={6} xl={6}>
            <input
              type='text'
              placeholder='Nome do checklist'
              value={nameChecklist}
              onChange={(input) => setNameChecklist(input.target.value)}
            />
          </Col>
          <Col xs={12} lg={3} xl={3}>
            <input
              type='date'
              placeholder='Data prazo'
              value={dateChecklist}
              onChange={(input) => setDateChecklist(input.target.value)}
            />
          </Col>
          <Col xs={12} lg={3} xl={3}>
            <button type='submit'>Criar</button>
          </Col>
        </Row>
      </form>
      <Row>
        <Col>
          <h3>TodoList criadas</h3>
        </Col>
      </Row>
      {listTodoList.map((todo) => (
        <RowTodoList key={todo.id}>
          <Link to={`/tasks/${todo.id}`}>
            <h3>{todo.name}</h3>
            <div className='todo-data-icon'>
              {todo.date_limit ? (
                <div className='info-data'>
                  <h5>{todo.dateFormat}</h5>
                </div>
              ) : (
                ''
              )}
              <div className='todo-icon'>
                <FaArrowRight size={24} color='#282828' />
              </div>
            </div>
          </Link>
        </RowTodoList>
      ))}
    </ContainerHome>
  );
};
