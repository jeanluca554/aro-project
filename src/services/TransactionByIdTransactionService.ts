import { api } from '../providers/Api';

const transaction = (idTransaction) => api.get(`/transaction/from/${idTransaction}`);

export const TransactionsService = {
  transaction
};