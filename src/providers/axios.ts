import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'aro.token': token } = parseCookies(ctx);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const api = axios.create({ baseURL: baseURL });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}