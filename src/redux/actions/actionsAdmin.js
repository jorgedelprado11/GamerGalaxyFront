
import axios from 'axios';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('/categories'); 
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data });
  } catch (error) {
   
  }
};

export const createProduct = (productData) => async (dispatch) => {
  try {
    const response = await axios.post('/products', productData); 
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    
  }
};