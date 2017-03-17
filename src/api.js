import axios from 'axios';

const protocol = window.location.href.split('//')[0];
const baseURL = `${protocol}//localhost:3000`;

const api = axios.create({ baseURL });

export default api;
