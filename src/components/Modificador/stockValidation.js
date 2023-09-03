const stockValidation = (state) => {
  const errors = {};

  if (state.stock < 0) {
    errors.stock = "*El campo no puede tener valores negativos";
  } else if (!Number(state.stock) && state.stock !== "0") {
    errors.stock = "*El stock debe ser un numero";
  }

  return errors;
};

export default stockValidation;
