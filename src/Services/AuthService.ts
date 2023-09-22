import AxiosService from './AxiosService';

const defaultPost = async (route: string, payload: Object) => {
  const newinstance = AxiosService.createAxiosInstance();
  const response = await newinstance.post(route, payload);
  return response.data;
};
const defaultGet = async (route: string) => {
  const newinstance = AxiosService.createAxiosInstance();
  const response = await newinstance.get(route);
  return response.data;
};

const Login = async (payload: Object) => {
  const newinstance = AxiosService.createAxiosInstance();
  const response = await newinstance.post('/auth/login', payload);
  return response.data;
};

export default {
  defaultPost,
  defaultGet,
  Login,
};
