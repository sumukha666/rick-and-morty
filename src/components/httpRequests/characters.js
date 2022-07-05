import httpMethods from "./index";

export const getCharactersAPI = () => httpMethods.get(`/api/character/`);
