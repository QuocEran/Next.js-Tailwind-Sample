import axios from "axios";
import userStore from "stores/example";
import Endpoints from "utilities/enums/Endpoint";

export default axios.create({
  baseURL: Endpoints.BASE_URL,
  headers: {
    Authorization: userStore.getState().access_token ? "Bearer " + userStore.getState().access_token : "",
  },
});
