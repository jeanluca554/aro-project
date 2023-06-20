import { api } from '../providers/Api';

const tickets = (identity: string, email: string) => api.get(`/transaction/tickets/${identity}/${email}`);

export const TicketsService = {
  tickets
};