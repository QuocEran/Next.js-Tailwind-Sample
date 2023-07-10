import axios from "axios";
import Endpoints from "utilities/enums/Endpoint";

export default axios.create({
  baseURL: Endpoints.BASE_URL,
});
