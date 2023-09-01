import {
  DELETE_PRODUCTO,
  GET_PRODUCTOS,
  GET_PRODUCTO_NOMBRE,
  PUT_PRODUCTO,
} from "./actions/actions-types";

const initialState = {
  productosAdmin: [],
  productoBorrados: [],
  copiaProductos: [],
  producto: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productosAdmin: action.payload,
        copiaProductos: action.payload,
      };

    case GET_PRODUCTO_NOMBRE:
      return { ...state, productosAdmin: action.payload };

    case DELETE_PRODUCTO:
      return { ...state, productosAdmin: action.payload };

    case PUT_PRODUCTO:
      return { ...state, productosAdmin: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
