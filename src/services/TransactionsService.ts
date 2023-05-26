import { api } from '../providers/Api';
import { ITransaction } from 'interfaces';

const transaction = (data: ITransaction) => api.post('/transaction/axios', data);

export const TransactionServices = {
  transaction
};