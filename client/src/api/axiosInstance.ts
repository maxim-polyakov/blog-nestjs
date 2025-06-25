import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_Base_Url,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


const token = localStorage.getItem('token');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance;