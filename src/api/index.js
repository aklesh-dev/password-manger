import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000'});

export const fetchPasswords = () => API.get('/passwords');
export const createPasswords = (passwordData) => API.post('/passwords', passwordData);
export const updatePasswords = (id) => API.patch(`/passwords/${id}`);
export const deletePasswords = (id) => API.delete(`/passwords/${id}`);