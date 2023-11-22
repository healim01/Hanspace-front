import axios, { AxiosRequestConfig } from 'axios';
// config
import { HOST_API, BASE_URL } from 'src/config-global';

// ----------------------------------------------------------------------

// const axiosInstance = axios.create({ baseURL: HOST_API });
const axiosInstance = axios.create({ baseURL: BASE_URL });

const deptId = localStorage.getItem('deptId');
const UserId = localStorage.getItem('userId');
const token = localStorage.getItem('accessToken');

axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    login: '/hanSpace/login',
    register: '/api/auth/register',
    info: '/hanSpace/info',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
  space: {
    list: `/space/list/${deptId}`,
  },
  user: {
    list: `/deptMember/list/${deptId}`,
    update: `/deptMember/${UserId}`,
  },
};
