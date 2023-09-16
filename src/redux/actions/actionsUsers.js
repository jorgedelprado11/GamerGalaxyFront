/** @format */

import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BY_CATEGORIES,
  GET_SUBCATEGORIES,
  ORDER_BY_PRICE,
  FILTER_BY_MARCAS,
  FILTER_ARMA_TU_PC,
  FILTER_COMPONENTES_ARMATUPC,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./actions-types";

import axios from "axios";

import {
  GET_DESCUENTOS,
  GET_NAME,
  CLEAR,
  GET_DIRECCIÓN,
  POST_USUARIO,
  GET_TOKEN,
  REMOVE_TOKEN,
} from "./actions-types";

export const getDescuentos = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/productos");
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
    const endpoint = "/productos";
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

export const clear = () => {
  return { type: CLEAR };
};

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await axios(`/productos`);
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
    const { data } = await axios(`/macroCategories`);
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
    const { data } = await axios(`/categorias`);
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

export const filterByMarcas = (filter) => {
  return {
    type: FILTER_BY_MARCAS,
    payload: filter,
  };
};

export const filterArmaTuPc = (filter) => {
  return {
    type: FILTER_ARMA_TU_PC,
    payload: filter,
  };
};

export const filterComponentesArmaTuPc = (producto) => {
  return {
    type: FILTER_COMPONENTES_ARMATUPC,
    payload: producto,
  };
};

//Actions Users

export const postDireccion = (id, direccion) => async (dispatch) => {
  const informacion = direccion;
  try {
    await axios.put(`/location/${id}`, informacion);
    const { data } = await axios(`/users/${id}`);
    dispatch({
      type: GET_DIRECCIÓN,
      payload: data,
    });
  } catch (error) {
    console.error("Error al modificar:", error);
  }
};

export const guardarUsuario = (user) => {
  let infoFormateada;
  if (user.given_name) {
    infoFormateada = {
      username: user.nickname,
      email: user.email,
      password: "desconocido",
      firstName: user.given_name,
      lastName: user.family_name,
      phoneNumber: "deconocido",
    };
  } else {
    infoFormateada = {
      username: user.nickname,
      email: user.email,
      password: "desconocido",
      firstName: "desconocido",
      lastName: "desconocido",
      phoneNumber: "deconocido",
    };
  }

  return async function (dispatch) {
    const newUser = await axios.post(`/users/createUser`, infoFormateada);
    dispatch({
      type: POST_USUARIO,
      payload: newUser.data,
    });
  };
};

export const guardarToken = (user) => {
  console.log("guardar token Id", user);
  const userFormat = {
    id: user.id,
    email: user.email,
    id_role: user.id_role,
  };

  return async function (dispatch) {
    const { data } = await axios.post(`/users/login`, userFormat);
    const order = data.order;

    console.log("token Ddd", order);
    dispatch({
      type: GET_TOKEN,
      payload: data,
    });
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

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});
