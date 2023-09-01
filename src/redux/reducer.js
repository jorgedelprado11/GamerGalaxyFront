
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_SUBCATEGORIES,
  GET_BY_CATEGORIES,
  ORDER_BY_PRICE,
} from "./actions/actions-types";
import { GET_DESCUENTOS, GET_NAME, CLEAN } from "./actions/actions-types";




let initialState = {
  // estados globales de productos
  productos: [],
  backup: [],
  destacados: [],

  // estados categorias
  categorias: [],
  subCategorias: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_DESCUENTOS:
      return { ...state, destacados: action.payload };

    case GET_NAME:
      console.log("reducer", action.payload);
      return { ...state, productos: action.payload };

    case CLEAN:
      return {
        destacados: [...destacados],
      };

    case GET_PRODUCTS:
      // console.log("desde el reducer", action.payload);
      //con esto traigo solo destacados y me guardo todo lo otro en el backup
      let destacados = action.payload.filter(
        (producto) => producto.calificacion === 2
      ).slice(0, 12);
      return {
        ...state,
        productos: [...destacados],
        backup: action.payload,
      };
    case ORDER_BY_PRICE:
      let ordenados = state.productos;
      action.payload === "Descendente"
        ? ordenados.sort((a, b) => b.precio - a.precio)
        : ordenados.sort((a, b) => a.precio - b.precio);
      return {
        ...state,
        productos: [...ordenados],
      };
    //CATEGORIAS
    case GET_CATEGORIES:
      return {
        ...state,
        categorias: action.payload,
      };
    case GET_SUBCATEGORIES:
      // console.log('desde reducer',action.payload);
      return {
        ...state,
        subCategorias: action.payload,
      };
    case GET_BY_CATEGORIES:
      // console.log("cat desde reducer", action.payload);
      let filtered = state.backup.filter(
        (producto) => producto.id_categoria === +action.payload
      );
      // console.log("filtered", state.backup);
      return {
        ...state,
        productos: [...filtered],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
