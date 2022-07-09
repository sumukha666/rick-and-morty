import httpMethods from "./index";

export const getCharactersAPI = (config = { pageNo: 1 }) =>
  httpMethods.get(`/api/character/?page=${config.pageNo}`);
