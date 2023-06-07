import apiPostClient from "services/axios/apiClient/post";
import { ICheckAccount } from "types/response/auth/IAuth";
import { IReturnData } from "types/response/base/IBaseResponse";
import Endpoints from "utilities/enums/Endpoint";

const postCheckAccount = async (phone: string): Promise<IReturnData<ICheckAccount>> => {
  const response = await apiPostClient<ICheckAccount>(Endpoints.AUTH.CHECK_ACCOUNT, { phone: phone });

  return response;
};

export { postCheckAccount };
