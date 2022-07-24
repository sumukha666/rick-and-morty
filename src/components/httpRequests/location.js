import httpMethods from "./index";

export const getLocationInfoAPI = (config = { id: 1 }) =>
  httpMethods.get(`/api/location/${config.id}`);
