import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BY_CATEGORIES,
  GET_SUBCATEGORIES,
  ORDER_BY_PRICE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./actions-types";
import axios from "axios";
const URL = "http://localhost:3001";
import { GET_DESCUENTOS, GET_NAME, CLEAN } from "./actions-types";

export const getDescuentos = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/productos");
      let destacados = response.data
        .filter(
          (prod) => prod.calificacion === 5 && !prod.nombre.includes("Notebook")
        )
        .slice(0, 25);
      // console.log("action", destacados);
      dispatch({ type: GET_DESCUENTOS, payload: destacados });
    } catch (error) {
      console.error("Error al obtener los descuentos:", error);
    }
  };
};

export const getProductByName = (nombre) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/productos";
    try {
      const { data } = await axios(endpoint);

      const dato = data.filter((dato) =>
        dato.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      return dispatch({
        type: GET_NAME,
        payload: dato,
      });
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
};

export const clean = () => {
  return { type: CLEAN };
};

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

export const addToCart = (producto) => ({
  type: ADD_TO_CART,
  payload: producto,
});

export const removeFromCart = (productoId) => ({
  type: REMOVE_FROM_CART,
  payload: productoId,
});
