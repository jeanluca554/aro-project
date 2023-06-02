import { api } from '../providers/Api';

const transactions = (idProduct) => api.get(`/transaction/${idProduct}`);

export const TransactionsService = {
  transactions
};