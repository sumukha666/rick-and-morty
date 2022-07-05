import axios from "axios";
import config from "../../system/config";

const getUrl = (endPoint) => `${config.BASE_URL}${endPoint}`;

const get = (path, config = {}) => axios.get(getUrl(path), config);

const httpMethods = {
  get,
};

export default httpMethods;
