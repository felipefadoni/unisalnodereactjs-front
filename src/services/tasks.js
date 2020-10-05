import api from '../providers/api';
import basicService from './basic';

const tasks = {
  getAllTasksFromTodoList: ({ idTodoList }) => {
    return api.get(`/tasks/${idTodoList}`, {
      headers: {
        ...basicService()
      }
    });
  },

  createTask: async ({ idTodoList, name, date_limit }) => {
    return await api.post(
      `/tasks/${idTodoList}`,
      { name, date_limit },
      {
        headers: {
          ...basicService()
        }
      }
    );
  },

  updateTask: async ({ id, status }) => {
    return await api.put(
      `/tasks/${id}`,
      { status },
      {
        headers: {
          ...basicService()
        }
      }
    );
  },

  deleteTask: async ({ id }) => {
    return await api.delete(`/tasks/${id}`, {
      headers: {
        ...basicService()
      }
    });
  }
};

export default tasks;
