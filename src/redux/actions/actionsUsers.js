import { GET_PRODUCTS } from "./actions-types";
import arrayobjetos from "../../db/data.json";

export const getProducts = () => {
  const data = arrayobjetos;

  console.log("desde el actions", data);
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
};
