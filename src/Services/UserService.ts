import AxiosService from './AxiosService';

const GetUserData = async (id: number) => {
  const newinstance = AxiosService.createAxiosInstance();
  // poderia ter usado a /users mas essa aqui pega do usuario especifico
  const response = await newinstance.get(`/users/${id}`);
  return response.data;
};

export default {
  GetUserData,
};
