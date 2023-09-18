/** @format */

import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_BY_CATEGORIES,
  GET_SUBCATEGORIES,
  ORDER_BY_PRICE,
  FETCH_SPECIFICATIONS_30,
  FETCH_SPECIFICATIONS_9,
  FETCH_SPECIFICATIONS_3,
  FILTER_BY_MARCAS,
  FILTER_ARMA_TU_PC,
  FILTER_COMPONENTES_ARMATUPC,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_COMENTARIOS,
  GET_CALIFICACIONES,
  POST_LOCATION,
  UPDATE_CARRITO,
  UPDATE_CART_QUANTITY,
  GET_DESCUENTOS,
  GET_NAME,
  CLEAR,
  GET_DIRECCION,
  POST_USUARIO,
  CREATE_MERCADO_PAGO_PREFERENCE,
  GET_TOKEN,
  POST_COMENTS,
  POST_CALIFICACION,
  REMOVE_TOKEN,
  GET_MARCAS,
} from "./actions-types";

import axios from "axios";

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

export const updateCarrito = (id_producto, id_order, quantity) => {
  return {
    type: UPDATE_CARRITO,
    payload: { id_producto, id_order, quantity },
  };
};

//Actions Users

export const postDireccion = (token, direccion) => {
  /*   let domicilio = {
    provincia: "",
    ciudad: "",
    calle: "",
    codigo_postal: "",
  }; */
  return async (dispatch) => {
    console.log("TOKEN", token);
    const { data } = await axios.post(`/location/createLocation`, direccion, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: POST_LOCATION,
      payload: data,
    });
  };
};
export const putDireccion = (direccion, id) => {
  let reset = {
    provincia: direccion.provincia,
    ciudad: direccion.ciudad,
    calle: direccion.calle,
    codigo_postal: direccion.codigo_postal,
  };
  return async (dispatch) => {
    const { data } = await axios.put(`/location/${id}`, reset);
    console.log("PUT DIRECC", data);
    dispatch({ type: GET_DIRECCION, payload: data.Location });
  };
};
export const getDireccion = (id) => {
  console.log("usuario-->", id);
  return async (dispatch) => {
    const response = await axios.get(`/location/user/${id}`);
    console.log("ACTION USERS", response.data);
    dispatch({
      type: GET_DIRECCION,
      payload: response.data.Location,
    });
  };
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
  const userFormat = {
    id: user.id,
    email: user.email,
    id_role: user.id_role,
  };

  return async function (dispatch) {
    const { data } = await axios.post(`/users/login`, userFormat);

    dispatch({
      type: GET_TOKEN,
      payload: data,
    });

    //     const response = await axios.get("/users");
    //     const datos = response.data.filter((use) =>
    //       use.email.includes(infoFormateada.email)
    //     );

    //     if (!datos.length) {
    //       const newUser = await axios.post(`/users/createUser`, infoFormateada);
    //       dispatch({
    //         type: POST_USUARIO,
    //         payload: newUser.data,
    //       });
    //     } else {
    //       const { data } = await axios.get(
    //         `/users/profile?username=${infoFormateada.username}`
    //       );
    //       dispatch({
    //         type: POST_USUARIO,
    //         payload: data,
    //       });
    //     }
  };
};

export const guardarComentario = (product, id) => {
  const coments = {
    description: product.comentario,
  };
  const id_producto = product.id_producto;

  return async (dispatch) => {
    const { data } = await axios.post(
      `/comments/${id}/${id_producto}`,
      coments
    );

    dispatch({ type: POST_COMENTS, payload: data });
  };
};

export const getComentarios = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/comments`);
    dispatch({ type: GET_COMENTARIOS, payload: data });
  };
};

export const guardarCalificacion = (product, id) => {
  const info = {
    value: product.calificacion,
  };
  const id_producto = product.id_producto;

  return async (dispatch) => {
    const { data } = await axios.post(`/ratings/${id}/${id_producto}`, info);
    dispatch({ type: POST_CALIFICACION, payload: data });
  };
};

export const getCalificaciones = () => {
  return async (dispatch) => {
    const response = await axios(`/ratings`);
    dispatch({ type: GET_CALIFICACIONES, payload: response.data });
  };
};

export const addToCart = (info) => {
  return async function (dispatch) {
    const { data } = await axios.put(`/order/update`, info);
    console.log("a ver los productos perrrro", data.Products);
    dispatch({
      type: ADD_TO_CART,
      payload: data.Products,
    });
  };
};

export const removeFromCart = (info) => {
  return async function (dispatch) {
    const { data } = await axios.delete("/order/delete-product", {
      data: info,
    });

    dispatch({
      type: REMOVE_FROM_CART,
      payload: data.orderUpdated.Products,
    });
  };
};

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const fetchSpecifications3 = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/specifications/3"
      );
      console.log("Datos recibidos para ID 3:", response.data);
      dispatch({
        type: FETCH_SPECIFICATIONS_3,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener datos para ID 3:", error.message);
    }
  };
};

export const fetchSpecifications9 = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/specifications/9"
      );
      console.log("Datos recibidos para ID 9:", response.data);
      dispatch({
        type: FETCH_SPECIFICATIONS_9,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener datos para ID 9:", error.message);
    }
  };
};

export const fetchSpecifications30 = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/specifications/30"
      );
      console.log("Datos recibidos para ID 30:", response.data);
      dispatch({
        type: FETCH_SPECIFICATIONS_30,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener datos para ID 30:", error.message);
    }
  };
};

export const updateCartQuantity = (productId, newQuantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      newQuantity,
    },
  };
};

export const getMarcas = () => {
  return {
    type: GET_MARCAS,
  };
};

export const filterByMarcas = (filter) => {
  return {
    type: FILTER_BY_MARCAS,
    payload: filter,
  };
};
