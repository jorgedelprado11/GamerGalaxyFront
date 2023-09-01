
import axios from 'axios';

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
};
