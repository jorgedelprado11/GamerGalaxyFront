
import {FETCH_CATEGORIES_SUCCESS, CREATE_PRODUCT_SUCCESS} from './actions/actionsAdmin';
export const initialState = {
  categories: [],
  createdProduct: null
};
export default function rootReducer( state = initialState, action){
  
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
   console.log(action.payload)
    return {...state, categories: action.payload.map((categoria)=>
      {return{
       categoria:categoria.nombre,
       id_categorias:categoria.id_categoria, 
    }})};
     
      case CREATE_PRODUCT_SUCCESS:
        return action.payload;
      default:
      return state;
  }
}





