import httpMethods from "./index";

// Api to get all characters
export const getCharactersAPI = (config = { pageNo: 1 }) =>
  httpMethods.get(`/api/character/?page=${config.pageNo}`);
