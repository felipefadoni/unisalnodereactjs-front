import api from '../providers/api';

import basicService from './basic';

const todoList = {
  create: async ({ name, date_limit }) => {
    return api.post(
      '/todolist',
      { name, date_limit },
      {
        headers: {
          ...basicService()
        }
      }
    );
  },
  getAllTodoList: async () => {
    return api.get('/todolist', {
      headers: {
        ...basicService()
      }
    });
  }
};

export default todoList;
