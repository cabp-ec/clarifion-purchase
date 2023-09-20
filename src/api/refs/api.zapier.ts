import { ApiReference } from '../types/api.reference.type';

const apiZapier: ApiReference = {
  protocol: 'https',
  host: '3123498754.zapier.com',
  endpoints: {
    google: {
      sheets: {
        update: '/myZap',
      }
    },
  },
};

export default apiZapier;
