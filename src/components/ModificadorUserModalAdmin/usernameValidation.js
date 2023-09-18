function userNameValidation(state) {
  const errors = {};
  if (state.username?.length > 20) {
    errors.username = "*nombre de usuario no puede superar los 20 caracteres";
  }

  return errors;
}

export default userNameValidation;
