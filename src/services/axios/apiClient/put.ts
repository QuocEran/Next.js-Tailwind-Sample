import axios from "axios";
import userStore from "stores/user";
import IBaseResponse, { IReturnData } from "types/response/base/IBaseResponse";

const apiPutClient = async <T>(url: string, data: any, token?: string | null): Promise<IReturnData<T>> => {
  let returnData = { error: false, data: null } as IReturnData<T>;
  try {
    const result = await axios
      .create({
        headers: {
          Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
        },
      })
      .put<IBaseResponse<T>>(url, data);

    if (result.status == 200 || result.status == 201) {
      returnData.error = false;
      returnData.data = result.data.data;
    }
  } catch (error) {
    console.error(error);
    returnData.error = true;
  }
  return returnData;
};

export default apiPutClient;
