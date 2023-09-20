function firstNameValidation(state) {
  const errors = {};

  if (state.firstName?.length > 20) {
    errors.firstName = "*nombre no puede superar los 20 caracteres";
  } else if (
    state.firstName?.split("").filter((e) => Number(e) && e).length >= 1
  ) {
    errors.firstName = "*nombre no puede tener número";
  }
  return errors;
}

export default firstNameValidation;
