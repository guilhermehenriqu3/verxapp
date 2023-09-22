import Axios, {AxiosRequestConfig} from 'axios';
import enviroment from '../Enviroments';
import {store} from '../Store';

const createAxiosInstance = () => {
  let config: AxiosRequestConfig = {
    baseURL: enviroment.API_URL,
    timeout: 10000,
  };
  const instance = Axios.create(config);

  instance.interceptors.request.use((value: AxiosRequestConfig) => {
    const user: any = store?.getState().userReducer;

    if (user.Token) {
      value.headers = {Authorization: 'Bearer ' + user.Token};
    }
    return value;
  });

  instance.interceptors.response.use(
    (value: any) => {
      return value;
    },
    async (error: any) => {
      if (error?.message === 'Network Error') {
        throw new Error('Falha na conexão.');
      }

      if (error.code === 'ECONNABORTED') {
        throw {
          message:
            'Nosso servidor demorou muito tempo para responder, tente novamente mais tarde',
        };
      }
      if (error?.response?.status === 401) {
        throw error?.response?.data;
      }
      if (error?.response?.status === 400) {
        throw error?.response?.data;
      }
      if (error?.response?.data?.errors?.length) {
        throw {
          message: error.response.data.errors[0],
        };
      }
      return error;
    },
  );

  return instance;
};

export default {
  createAxiosInstance,
};
