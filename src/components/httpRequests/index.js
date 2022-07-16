import axios from "axios";
import config from "../../system/config";

const getUrl = (endPoint) => `${config.BASE_URL}${endPoint}`;

const get = (path, config = {}) => axios.get(getUrl(path), config);

const fetchData = (URL) => {
  return axios
    .get(URL)
    .then((response) => {
      return {
        success: true,
        data: response.data,
      };
    })
    .catch(() => {
      return { success: false };
    });
};

const httpMethods = {
  get,
  fetchData,
};

export default httpMethods;
