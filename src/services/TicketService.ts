import { api } from '../providers/Api';

const ticket = (idTicket) => api.get(`/transaction/ticket/from/${idTicket}`);

export const TicketService = {
  ticket
};