function lastNameValidation(state) {
  const errors = {};

  if (state.lastName?.length > 20) {
    errors.lastName = "*apellido no puede superar los 20 caracteres";
  } else if (
    state.lastName?.split("").filter((e) => Number(e) && e).length >= 1
  ) {
    errors.lastName = "*apellido no puede tener número";
  }
  return errors;
}

export default lastNameValidation;
