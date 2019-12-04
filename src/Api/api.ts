import {BASE_URL} from './constants';
import axios from 'axios';

export const apiConfig = { baseURL: BASE_URL, timeout: 60000 }
const api = axios.create(apiConfig);
export default api