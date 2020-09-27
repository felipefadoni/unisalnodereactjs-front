import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import todoListService from '../../services/todolist';
import { compareData }  from '../../util';

import Header from '../../components/Header';
import { ContainerHome } from './style';

export default () => {
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [nameChecklist, setNameChecklist] = useState('');
  const [dateChecklist, setDateChecklist] = useState('');
  const [listTodoList, setTodoList] = useState([]);

  const handleGetTodoList = () => {
    todoListService.getAllTodoList().then((response) => {
      setTodoList(response.data);
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
        const todoListCreated = createTodoList.data[0];
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
    if (!token) history.push('/');

    setLoading(false);

    handleGetTodoList();
  }, [history]);

  if (loading) return <h2>loading...</h2>;

  return (
    <ContainerHome>
      <Header showExit alignLogo='center' />
      <h2>Criar um todolist</h2>
      <form autoComplete='off' onSubmit={handleSubmitNewChecklist}>
        <Row>
          <Col>
            <input
              type='text'
              placeholder='Nome do checklist'
              value={nameChecklist}
              onChange={(input) => setNameChecklist(input.target.value)}
            />
          </Col>
          <Col>
            <input
              type='date'
              placeholder='Data prazo'
              value={dateChecklist}
              onChange={(input) => setDateChecklist(input.target.value)}
            />
          </Col>
          <Col>
            <button type='submit'>Criar</button>
          </Col>
        </Row>
      </form>
      {listTodoList.map((todo) => (
        <Row key={todo.id}>
          <Col>
            <h2>{todo.name}</h2>
            <h5>{todo.date_limit}</h5>
          </Col>
        </Row>
      ))}
    </ContainerHome>
  );
};
