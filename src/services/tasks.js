import api from '../providers/api';
import basicService from './basic';

const tasks = {
  getAllTasksFromTodoList: ({ idTodoList }) => {
    return api.get(`/tasks/${idTodoList}`, {
      headers: {
        ...basicService()
      }
    });
  }
};

export default tasks;
