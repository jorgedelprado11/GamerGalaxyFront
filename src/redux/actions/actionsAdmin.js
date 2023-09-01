
import axios from "axios";

import {
  GET_PRODUCTOS,
  GET_PRODUCTO_NOMBRE,
  DELETE_PRODUCTO,
  PUT_PRODUCTO,
} from "./actions-types";
import { info } from "autoprefixer";
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';

export const fetchCategories = () => async (dispatch) => {

  try {
    const {data} = await axios.get('http://localhost:3001/categorias'); 
   const {categories}=data
    
    return dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    alert(error.message)
  }
};

export const createProduct = (productData) => async (dispatch) => {
  const datoFormateado={
    nombre:productData.nombre,
    calificacion:Number(productData.calificacion),
    precio:Number(productData.precio),
    descuento:Number(productData.descuento),
    stock:Number(productData.stock),
    id_categoria:Number(productData.id_categoria),
    imagen:productData.imagen.toString(),
    
  }
  
  try {
    

    await axios.post('http://localhost:3001/productos', datoFormateado); 
    return dispatch({ type: CREATE_PRODUCT_SUCCESS, payload:"hola" });
  } catch (error) {
alert (error.message)  }



export const obtenerProductos = () => {
  const endpoint = "http://localhost:3001/productos";

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
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/productos";
    try {
      const { data } = await axios(endpoint);
      const dato = data.filter((dato) =>
        dato.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
      return dispatch({
        type: GET_PRODUCTO_NOMBRE,
        payload: dato,
      });
    } catch (error) {
      alert("error:", error.message);
    }
  };
};

export const borrarProducto = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/productos/${id}`);
    const { data } = await axios("http://localhost:3001/productos");
    console.log("Eliminando producto con ID:", id);
    console.log("Productos actualizados:", data);
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
  console.log(informacion);

  try {
    await axios.put(`http://localhost:3001/productos/${id}`, informacion);
    const { data } = await axios("http://localhost:3001/productos");
    console.log("Eliminando producto con ID:", id);
    console.log("Productos actualizados:", data);
    dispatch({
      type: PUT_PRODUCTO,
      payload: data,
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }

};
