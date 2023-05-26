import { api } from '../providers/Api';

const products = () => api.get('/product');

export const ProductsServices = {
  products
};