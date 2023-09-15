const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function emailValidation(state) {
  const errors = {};

  console.log("entro a la validacion");
  if (state.email?.length > 35) {
    errors.email = "Su email sobrepasa la cantidad de caracteres";
  } else if (!regexEmail.test(state.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  return errors;
}

export default emailValidation;
