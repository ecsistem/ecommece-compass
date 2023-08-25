import axios from 'axios';

export const clienteAxios = axios.create({
    baseURL: 'https://fakestoreapi.com',
  });