import { GET_PRODUCTS } from "./actions/actions-types";

let initialState = {
  // estados globales de productos
  productos: [],
  backup: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("desde el reducer", action.payload);
      return {
        ...state,
        productos: action.payload,
        backup: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
