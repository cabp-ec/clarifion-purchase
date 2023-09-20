import { ApiReference } from '../types/api.reference.type';

const apiDefault: ApiReference = {
  protocol: 'http',
  host: 'carlos-bucheli.com',
  endpoints: {
    state: {
      get: '/api/c/1/home/state',
    },
    healthCheck: '/health'
  },
};

export default apiDefault;
