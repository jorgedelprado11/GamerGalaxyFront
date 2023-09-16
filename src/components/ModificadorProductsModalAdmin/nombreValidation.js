function nombreValidation(state) {
  const errors = {};
  console.log(state.nombre);
  if (state.nombre === "") {
    errors.nombre = "*El campo nombre no puede estar vacío";
  } else if (state.nombre.length > 50) {
    errors.nombre = "*nombre no puede superar los 50 caracteres";
  }
  return errors;
}

export default nombreValidation;
