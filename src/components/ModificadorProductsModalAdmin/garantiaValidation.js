function garantiaValidation(state) {
  const errors = {};
  console.log("garantia", state.garantia);
  if (state.garantia < 0) {
    errors.garantia = "*El campo no puede tener valores negativos";
  } else if (state.garantia > 36) {
    errors.garantia = "*El campo no puede superar 36";
  } else if (!Number(state.garantia) && state.garantia !== "0") {
    errors.garantia = "*La garantia debe ser un numero";
  }
  return errors;
}

export default garantiaValidation;
