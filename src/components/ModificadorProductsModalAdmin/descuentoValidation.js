function descuentoValidation(state) {
  const errors = {};

  if (state.descuento < 0) {
    errors.descuento = "*El campo no puede tener valores negativos";
  } else if (state.descuento > 90) {
    errors.descuento = "*El campo no puede superar el 90";
  } else if (!Number(state.descuento) && state.descuento !== "0") {
    errors.descuento = "*El descuento debe ser un numero";
  }

  return errors;
}

export default descuentoValidation;
