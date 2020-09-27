import api from '../providers/api';

const authentications = {
  authenticate: async ({ login, password }) => {
    return api.post('/authenticate', { login, password });
  }
};

export default authentications;
