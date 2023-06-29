import { api } from '../providers/Api';

const transactions = (idProduct: string) => api.get(`/transaction/${idProduct}`);

export const TransactionsService = {
  transactions
};