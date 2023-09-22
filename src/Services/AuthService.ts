import AxiosService from './AxiosService';

const Login = async (payload: Object) => {
  const newinstance = AxiosService.createAxiosInstance();
  const response = await newinstance.post('/auth/login', payload);
  return response.data;
};

export default {
  Login,
};
