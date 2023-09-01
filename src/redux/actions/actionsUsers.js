import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BY_CATEGORIES,
  GET_SUBCATEGORIES,
  ORDER_BY_PRICE,
} from "./actions-types";
import axios from "axios";
import arrayobjetos from "../../db/data.json";
const URL = "http://localhost:3001";
// const arrayCategorias = [
//   "Procesadores",
//   "Mothers",
//   "GPUs",
//   "Memorias RAM",
//   "Almacenamiento",
//   "Periféricos",
//   "Fuentes",
//   "Gabinetes",
//   "Monitores",
//   "Refrigeración",
// ];

const arrayCategorias = [
  "Procesador",
  "Mother",
  "Memoria",
  "Disco",
  "Placa de Video",
  "Fuente",
];

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await axios(`${URL}/productos`);
    // console.log(data);

    // console.log("desde el actions", data);
    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    const { data } = await axios(`${URL}/macroCategories`);
    // console.log(data);

    // console.log("desde el actions", data);
    return dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  };
};

export const getSubCategories = () => {
  return async (dispatch) => {
    const { data } = await axios(`${URL}/categorias`);
    // console.log('subcategorias desde el action',data.categories);

    // console.log("desde el actions", data);
    return dispatch({
      type: GET_SUBCATEGORIES,
      payload: data.categories,
    });
  };
};
export const getByCategories = (categoria) => {
  // console.log('categoria desde action', categoria)
  return {
    type: GET_BY_CATEGORIES,
    payload: categoria,
  };
};
export const orderByPrice = (order) => {
  return {
    type: ORDER_BY_PRICE,
    payload: order,
  };
};
