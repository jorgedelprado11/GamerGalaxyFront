function phoneNumberValidation(state) {
  const errors = {};

  if (!Number(state.phoneNumber)) {
    errors.phoneNumber = "Numero de telefono no puede ser letras";
  }
  return errors;
}

export default phoneNumberValidation;
