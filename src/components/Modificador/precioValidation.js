const precioValidation = (state) => {
    const errors = {};
  
    if (state.precio < 0) {
      errors.precio = "*El campo no puede tener valores negativos";
    } else if (!Number(state.precio) && state.precio !== "0") {
      errors.precio = "*El precio debe ser un numero";
    }
  
    return errors;
  };
  
  export default precioValidation;