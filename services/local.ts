import { data } from "../data";

export const getAllLocal = () => {
  return data.locais;
};

export const getLocalById = (id: number) => {
  return data.locais.find((item) => item.id === id);
};

export const getLocaisByCategory = (idCategory: number) => {
  return data.locais.filter((item) => item.idCategory === idCategory);
};
