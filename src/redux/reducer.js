/** @format */

import {
  FETCH_CATEGORIES_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
} from "./actions/actionsAdmin";

import {
  GET_PRODUCTOS,
  DELETE_PRODUCTO,
  GET_PRODUCTO_NOMBRE,
  PUT_PRODUCTO,
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_SUBCATEGORIES,
  GET_BY_CATEGORIES,
  ORDER_BY_PRICE,
  GET_USUARIOS,
  GET_USUARIOS_NOMBRE,
  GET_USUARIOS_ID,
  DELETE_USUARIO,
  PUT_USUARIOS_ID,
  PUT_PRECIOS_ID,
  FILTER_ARMA_TU_PC,
  FILTER_BY_MARCAS,
  FILTER_HARDCODE,
  FILTER_HARDCODE2,
  GET_DIRECCIÓN,
  POST_USUARIO,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DESCUENTOS,
  GET_NAME,
  CLEAR,
} from "./actions/actions-types";

let initialState = {
  //admin
  productosAdmin: [],
  productoBorrados: [],
  producto: {},
  createdProduct: null,
  categories: [],
  productoCreado: {},
  usuarios: [],
  usuariosBorrados: [],
  usuarioNombre: [],
  usuarioId: {},
  // estados globales de productos
  productos: [],
  backup: [],
  filtrados: [],
  backupFiltrados: [],
  destacados: [],
  /*
  {
    producto: producto,
    cantidad: quantity,
  }
  */
  carrito: [],

  // estados categorias
  categorias: [],
  subCategorias: [],
  //estado direcciones de users
  direccion: [],
  usuarioCreado: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productosAdmin: action.payload,
        copiaProductos: action.payload,
      };
    case FETCH_CATEGORIES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload.map((categoria) => {
          return {
            categoria: categoria.nombre,
            id_categorias: categoria.id_categoria,
          };
        }),
      };

    case CREATE_PRODUCT_SUCCESS:
      return { ...state, productoCreado: action.payload };

    case GET_PRODUCTO_NOMBRE:
      return { ...state, productosAdmin: action.payload };

    case DELETE_PRODUCTO:
      return { ...state, productosAdmin: action.payload };

    case PUT_PRODUCTO:
      return { ...state, productosAdmin: action.payload };

    case GET_USUARIOS:
      return { ...state, usuarios: action.payload };

    case DELETE_USUARIO:
      return { ...state, usuarios: action.payload };

    case GET_USUARIOS_NOMBRE:
      return { ...state, usuarios: action.payload };

    case GET_USUARIOS_ID:
      console.log(action.payload);
      return { ...state, usuarios: action.payload };

    case PUT_USUARIOS_ID:
      console.log("put-usuario", action.payload);
      return { ...state, usuarios: action.payload };

    case GET_DESCUENTOS:
      return { ...state, destacados: action.payload };

    case GET_NAME:
      // console.log("reducer", action.payload);
      return { ...state, productos: action.payload };

    case CLEAR:
      return {
        ...state,
        productos: state.backup,
      };

    case PUT_PRECIOS_ID:
      // console.log("reducer", action.payload);
      return { ...state, productosAdmin: action.payload };

    //carrito
    case ADD_TO_CART:
      console.log("Producto agregado al carrito:", state.carrito);
      const productoEncontrado = state.carrito.find(
        (item) =>
          item.producto.id_producto === action.payload.producto.id_producto
      );
      console.log(productoEncontrado);
      const carritoFiltrado = state.carrito.filter(
        (item) =>
          item.producto.id_producto !== action.payload.producto.id_producto
      );

      if (productoEncontrado) {
        productoEncontrado.cantidad =
          Number(productoEncontrado.cantidad) + Number(action.payload.quantity);
        return {
          ...state,
          carrito: [...carritoFiltrado, productoEncontrado],
        };
      }
      return {
        ...state,
        carrito: [
          ...state.carrito,
          {
            producto: action.payload.producto,
            cantidad: action.payload.quantity,
          },
        ],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        carrito: state.carrito.filter(
          (producto) => producto.producto.id_producto !== action.payload
        ),
      };

    case GET_PRODUCTS:
      // console.log("desde el reducer", action.payload);
      //con esto traigo solo destacados y me guardo todo lo otro en el backup
      let productos;

      state.productos?.length
        ? (productos = state.productos)
        : (productos = action.payload);

      return {
        ...state,
        productosAdmin: action.payload,
        productos: [...productos],
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
    case FILTER_BY_MARCAS:
      let filtrados;

      state.backupFiltrados
        ? (filtrados = state.backupFiltrados)
        : (filtrados = state.productos);

      filtrados = filtrados.filter((producto) =>
        producto.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log("que onda", filtrados);
      return {
        ...state,
        backupFiltrados: state.productos,
        productos: [...filtrados],
        filtrados: state.backupFiltrados,
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
        backupFiltrados: [...filtered],
      };

    // arma tu pc

    case FILTER_ARMA_TU_PC:
      let filtradosPc = state.backup.filter(
        (producto) =>
          producto?.id_categoria == 3 &&
          producto.nombre.includes(action.payload)
      );
      // console.log('filtrados reducer',filtradosPc);
      return {
        ...state,
        productos: [...filtradosPc],
      };
    case GET_DIRECCIÓN:
      console.log("reducer", action.payload);
      return {
        ...state,
        direccion: action.payload,
      };
    case POST_USUARIO:
      console.log("reducer", action.payload);
      return {
        ...state,
        usuarioCreado: action.payload,
      };

    case FILTER_HARDCODE:
      let filtradosMother = state.backup.filter(
        (producto) =>
          producto?.id_categoria == 5 &&
          producto.SpecificationValues[7].value.includes(action.payload)
      );

      return {
        ...state,
        productos: [...filtradosMother],
      };
    case FILTER_HARDCODE2:
      let filtradosRam = state.backup.filter(
        (producto) =>
          producto?.id_categoria == 9 &&
          producto.SpecificationValues[2].value.includes(action.payload)
      );

      return {
        ...state,
        productos: [...filtradosRam],
      };
    default:
      return { ...state };
  }
}
