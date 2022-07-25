import httpMethods from "./index";

// Api to get location info of a character
export const getLocationInfoAPI = (config = { id: 1 }) =>
  httpMethods.get(`/api/location/${config.id}`);
