import axios from "axios";
import userStore from "stores/user";
import IBaseResponse, { IReturnData } from "types/response/base/IBaseResponse";

const apiGetClient = async <T>(url: string, params?: any, token?: string): Promise<IReturnData<T>> => {
  let returnData = { error: false, data: null, pagination: null } as IReturnData<T>;

  try {
    const result = await axios
      .create({
        headers: {
          Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
        },
      })
      .get<IBaseResponse<T>>(url, { params: params });
    if (result.status == 200) {
      returnData.error = false;
      returnData.data = result.data.data;
      returnData.pagination = result.data?.pagination;
    }
  } catch (error) {
    console.error(error);
    returnData.error = true;
  }

  return returnData;
};

export default apiGetClient;
