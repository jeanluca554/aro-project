import { Api } from 'providers';
import { ITransaction } from 'interfaces';

const transaction = (data: ITransaction) => Api.post('/transaction/axios', data);

export const TransactionServices = {
  transaction
};