// // src/api/axios.js
// This file sets up an Axios instance for making API requests.
// It includes a base URL and an interceptor to add an authorization token if available.
// import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default api;
