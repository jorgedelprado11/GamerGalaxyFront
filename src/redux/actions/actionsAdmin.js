import axios from "axios";

import {
  GET_PRODUCTOS,
  GET_PRODUCTO_NOMBRE,
  DELETE_PRODUCTO,
  PUT_PRODUCTO,
  GET_USUARIOS,
  DELETE_USUARIO,
  GET_USUARIOS_ID,
  PUT_USUARIOS_ID,
  PUT_PRECIOS_ID,
  GET_PEDIDOS_ID,
  GET_PEDIDOS,
  PUT_ORDER_STATUS,
  GET_ELIMINADOS,
  GET_ALL_REVIEWS,
} from "./actions-types";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/categorias");
    const { categories } = data;

    return dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    alert(error.message);
  }
};

export const createProduct = (productData) => async (dispatch) => {
  const datoFormateado = {
    nombre: productData.nombre,
    calificacion: Number(productData.calificacion),
    precio: Number(productData.precio),
    descuento: Number(productData.descuento),
    stock: Number(productData.stock),
    id_categoria: Number(productData.id_categoria),
    imagen: productData.imagen.toString(),
  };

  try {
    await axios.post("/productos", datoFormateado);
    return dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: "hola" });
  } catch (error) {
    alert(error.message);
  }
};

export const obtenerProductos = () => {
  const endpoint = "/productos";

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);

      return dispatch({
        type: GET_PRODUCTOS,
        payload: data,
      });
    } catch (error) {
      alert("error:", error.message);
    }
  };
};

export const getProductoPorNombre = (nombre) => {
  if (Number(nombre)) {
    const endpoint = "/productos";
    return async (dispatch) => {
      try {
        const { data } = await axios(`${endpoint}/${nombre}`);
        return dispatch({
          type: GET_PRODUCTO_NOMBRE,
          payload: [data],
        });
      } catch (error) {
        alert("No existe producto con ese Id");
      }
    };
  } else {
    return async (dispatch) => {
      const endpoint = "/productos";
      try {
        const { data } = await axios(`${endpoint}?nombre=${nombre}`);
        console.log("data-->", data);
        if (!data.length) {
          alert("No existe producto con ese nombre");
          return async (dispatch) => {
            try {
              const { data } = await axios(endpoint);
              return dispatch({
                type: GET_PRODUCTOS,
                payload: data,
              });
            } catch (error) {
              alert("No ingresó valores");
            }
          };
        }
        return dispatch({
          type: GET_PRODUCTO_NOMBRE,
          payload: data,
        });
      } catch (error) {
        alert(`No ingresó valores`);
      }
    };
  }
};

export const borrarProducto = (id) => async (dispatch) => {
  try {
    await axios.delete(`/productos/${id}`);
    const { data } = await axios("/productos");

    dispatch({
      type: DELETE_PRODUCTO,
      payload: data,
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

export const modificarProducto = (id, data) => async (dispatch) => {
  const informacion = data;
  console.log(id);
  try {
    await axios.put(`/productos/${id}`, informacion);
    const { data } = await axios("/productos");
    dispatch({
      type: PUT_PRODUCTO,
      payload: data,
    });
  } catch (error) {
    console.error("Error al modificar producto:", error);
  }
};

export const obtenerUsuarios = (token) => {
  const endpoint = "/users";

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return dispatch({
        type: GET_USUARIOS,
        payload: data,
      });
    } catch (error) {
      alert("error:", error.message);
    }
  };
};

//Pedir ruta por query
export const getUsuarioPorNombre = (name) => {
  console.log("info-->", info);
  const endpoint = "/users/profile";

  return async (dispatch) => {
    try {
      console.log("info", info);
      //const { data } = await axios.get(endpoint, { username: info.username });

      //const { data } = await axios(`${endpoint}?nombre=${nombre}`);
      console.log("data-->", data);
      return dispatch({
        type: GET_USUARIOS,
        payload: data,
      });
    } catch (error) {
      alert("error: no data", error.message);
    }
  };
};

export const borrarUsuario = (id, token) => async (dispatch) => {
  const endpoint = "/users";
  try {
    await axios.delete(`/users/${id}`);
    const { data } = await axios(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: DELETE_USUARIO,
      payload: data,
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

export const getUsuarioPorId = (id) => async (dispatch) => {
  try {
    const { data } = await axios(`/users/${id}`);
    console.log(data);

    dispatch({
      type: GET_USUARIOS_ID,
      payload: [data],
    });
  } catch (error) {
    alert("No existe usuario");
  }
};

export const obtenerPedidosId = (id) => async (dispatch) => {
  try {
    const { data } = await axios(`/order`);

    const filter = data.filter(
      (pedido) => +pedido.id_user === +id && pedido.status !== "cart"
    );

    dispatch({
      type: GET_PEDIDOS_ID,
      payload: filter,
    });
  } catch (error) {
    alert("No existe pedidos para ese usuario");
  }
};

export const modificarUsuario = (id, data, token) => async (dispatch) => {
  const informacion = data;
  const endpoint = "/users";
  try {
    await axios.put(`/users/${id}`, informacion);
    const { data } = await axios(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: PUT_USUARIOS_ID,
      payload: data,
    });
  } catch (error) {
    console.error("Error al modificar producto:", error);
  }
};

export const cambiarPrecioSegunDolar = (value) => async (dispatch) => {
  try {
    const { data } = await axios("/productos");

    for (const producto of data) {
      for (const key in producto) {
        if (key === "id_producto") {
          await axios.put(`/productos/${producto[key]}`, {
            precio: value * producto["precio"] + producto["precio"],
          });
        }
      }
    }
    const response = await axios("/productos");
    dispatch({
      type: PUT_PRECIOS_ID,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error al cambiar precios:", error);
  }
};

export const modificarOrderStatus = (id, data) => async (dispatch) => {
  const informacion = data;
  const idUser = id;
  console.log("ID EN MODIFICAR ORDENES-->", id);
  try {
    await axios.put("/order/update/status", informacion);
    const { data } = await axios(`/order`);
    /*   const filter = data.filter(
      (pedido) => +pedido.id_user === +id && pedido.status !== "cart"
    ); */

    const info = {
      data: data,
      id: idUser,
    };
    dispatch({
      type: PUT_ORDER_STATUS,
      payload: info,
    });
  } catch (error) {
    console.error("Error al modificar producto:", error);
  }
};

export const obtenerEliminados = () => {
  const endpoint = "/users/eliminados";

  return async (dispatch) => {
    try {
      const { data } = await axios(
        endpoint /* , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } */
      );

      console.log(data);

      return dispatch({
        type: GET_ELIMINADOS,
        payload: data,
      });
    } catch (error) {
      alert("error:", error.message);
    }
  };
};

export const restaurarUsuarios = (id) => {
  const endpoint = "/users/eliminados";

  return async (dispatch) => {
    await axios.post(`users/restore-user/${id}`);
    try {
      const { data } = await axios(endpoint, {
        /* headers: {
          Authorization: `Bearer ${token}`,
        },*/
      });

      return dispatch({
        type: GET_ELIMINADOS,
        payload: data,
      });
    } catch (error) {
      alert("error:", error.message);
    }
  };
};

export const obtenerPedidos = () => async (dispatch) => {
  try {
    const { data } = await axios(`/order`);

    const filter = data.filter((pedido) => pedido.status !== "cart");

    dispatch({
      type: GET_PEDIDOS,
      payload: filter,
    });
  } catch (error) {
    alert("No existe pedidos para ese usuario");
  }
};

export const obtenerReviews = () => async (dispatch) => {
  try {
    const { data } = await axios(`/comments`);

    dispatch({
      type: GET_ALL_REVIEWS,
      payload: data,
    });
  } catch (error) {
    alert("No existe pedidos para ese usuario");
  }
};
