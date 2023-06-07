import apiPostClient from "services/axios/apiClient/post";
import userStore from "stores/user";
import ILoginResponse from "types/response/auth/IAuth";
import { IReturnData } from "types/response/base/IBaseResponse";
import Endpoints from "utilities/enums/Endpoint";

const signIn = async (phone: string, password: string) => {
  const resLogIn = await postLogIn(phone, password);
  return resLogIn;
};

const postLogIn = async (phone: string, password: string): Promise<IReturnData<ILoginResponse>> => {
  const response = await apiPostClient<ILoginResponse>(Endpoints.AUTH.LOG_IN, { phone: phone, password: password });
  userStore.getState().saveAccessToken(response.data.access);
  return response;
};

export { postLogIn, signIn };
