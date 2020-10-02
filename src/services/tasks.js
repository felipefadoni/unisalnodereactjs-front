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
