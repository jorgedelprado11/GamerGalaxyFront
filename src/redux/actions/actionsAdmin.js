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
  PUT_ORDER_STATUS,
  GET_ELIMINADOS,
     FETCH_SPECIFICATIONS1,
   FETCH_SPECIFICATIONS2,
   FETCH_SPECIFICATIONS3,
   FETCH_SPECIFICATIONS4,
 FETCH_SPECIFICATIONS5,
 FETCH_SPECIFICATIONS6,
FETCH_SPECIFICATIONS7,
FETCH_SPECIFICATIONS8,
 FETCH_SPECIFICATIONS9,
 FETCH_SPECIFICATIONS10,
 FETCH_SPECIFICATIONS11,
  FETCH_SPECIFICATIONS12, 
  FETCH_SPECIFICATIONS13, 
  FETCH_SPECIFICATIONS14,
  FETCH_SPECIFICATIONS15, 
  FETCH_SPECIFICATIONS16, 
  FETCH_SPECIFICATIONS17, 
  FETCH_SPECIFICATIONS18, 
  FETCH_SPECIFICATIONS19, 
  FETCH_SPECIFICATIONS20,
  FETCH_SPECIFICATIONS21, 
  FETCH_SPECIFICATIONS22, 
  FETCH_SPECIFICATIONS23,
  FETCH_SPECIFICATIONS24, 
  FETCH_SPECIFICATIONS25, 
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
    specificationValues:productData.specificationValues
  };
  console.log(datoFormateado,"aca dato formateado")

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

  try {
    await axios.put("/order/update/status", informacion);
    const { data } = await axios(`/order`);
    const filter = data.filter(
      (pedido) => +pedido.id_user === +id && pedido.status !== "cart"
    );
    dispatch({
      type: PUT_ORDER_STATUS,
      payload: filter,
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
}
  export const fetchSpecifications1 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/1');
        
        dispatch({
          type: FETCH_SPECIFICATIONS1,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications2 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/2');
        
        dispatch({
          type: FETCH_SPECIFICATIONS2,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications3 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/3');
       
        dispatch({
          type: FETCH_SPECIFICATIONS3,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications4 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/4');
        
        dispatch({
          type: FETCH_SPECIFICATIONS4,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications5 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/5');
        
        dispatch({
          type: FETCH_SPECIFICATIONS5,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications6 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/6');
        
        dispatch({
          type: FETCH_SPECIFICATIONS6,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications7 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/7');
        
        dispatch({
          type: FETCH_SPECIFICATIONS7,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications8 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/8');
        
        dispatch({
          type: FETCH_SPECIFICATIONS8,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications9 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/9');
        
        dispatch({
          type: FETCH_SPECIFICATIONS9,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications10 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/10');
        
        dispatch({
          type: FETCH_SPECIFICATIONS10,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications11 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/11');
        
        dispatch({
          type: FETCH_SPECIFICATIONS11,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications12 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/12');
        
        dispatch({
          type: FETCH_SPECIFICATIONS12,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications13 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/13');
        
        dispatch({
          type: FETCH_SPECIFICATIONS13,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications14 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/14');
        
        dispatch({
          type: FETCH_SPECIFICATIONS14,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications15 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/15');
        
        dispatch({
          type: FETCH_SPECIFICATIONS15,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications16 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/16');
        
        dispatch({
          type: FETCH_SPECIFICATIONS16,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications17 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/17');
        
        dispatch({
          type: FETCH_SPECIFICATIONS17,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications18 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/18');
        
        dispatch({
          type: FETCH_SPECIFICATIONS18,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications19 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/19');
        
        dispatch({
          type: FETCH_SPECIFICATIONS19,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications20 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/20');
        
        dispatch({
          type: FETCH_SPECIFICATIONS20,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications21 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/21');
        
        dispatch({
          type: FETCH_SPECIFICATIONS21,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications22 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/22');
        
        dispatch({
          type: FETCH_SPECIFICATIONS22,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications23 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/23');
        
        dispatch({
          type: FETCH_SPECIFICATIONS23,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications24 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/24');
        
        dispatch({
          type: FETCH_SPECIFICATIONS24,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };
  export const fetchSpecifications25 = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/specifications/25');
        
        dispatch({
          type: FETCH_SPECIFICATIONS25,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener datos para ID 30:', error.message);
      }
    };
  };

;
