import AxiosService from './AxiosService';

const GetUserData = async (id: number) => {
  const newinstance = AxiosService.createAxiosInstance();
  const response = await newinstance.get(`/users/${id}`);
  return response.data;
};

export default {
  GetUserData,
};
