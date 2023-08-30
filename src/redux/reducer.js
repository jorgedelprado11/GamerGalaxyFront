import {} from "./actions/actions-types";

const initialState = {
  algo: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case algo:
      return { ...state };
    default:
      return { ...state };
  }
};

export default rootReducer;
