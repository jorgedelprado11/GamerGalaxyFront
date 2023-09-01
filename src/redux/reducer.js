/** @format */

import { GET_DESCUENTOS, GET_NAME, CLEAN } from "./actions/actions-types";

const initialState = {
  productos: [],
  destacados: [],
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
    default:
      return { ...state };
  }
};

export default rootReducer;
