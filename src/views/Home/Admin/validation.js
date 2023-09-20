const validate = (state) => {
  const errors = {};

  if (state.nombre === undefined) {
    errors.nombre = "*El campo nombre no puede estar vacío";
  } else if (state.nombre === "") {
    errors.nombre = "*El campo nombre no puede estar vacío";
  } else if (state.nombre.length < 3 || state.nombre.length > 20) {
    errors.nombre = "*Nombre debe tener entre 3 y 20 caracteres";
  } else if (state.nombre.match(/\d/)) {
    errors.nombre = "*Nombre no puede contener números";
  }
  /*  if (state.specificationValues.length > 2) {
    errors.socket = "*No se pueden seleccionar más de un tipo de socket";
  } else if (state.specificationValues.length > "") {
    errors.socket = "*Tienes que elegir al menos un tipo de socket";
  } */

  if (state.calificacion === undefined) {
    errors.calificacion = "*El campo calificacion no puede estar vacío";
  } else if (state.calificacion === "") {
    errors.calificacion = "*El campo calificacion no puede estar vacío";
  } else if (
    isNaN(state.calificacion) ||
    state.calificacion < 1 ||
    state.calificacion > 5
  ) {
    errors.calificacion = "*Calificacion debe ser un número entre 1 y 5";
  }

  if (state.precio === undefined) {
    errors.precio = "*El campo precio no puede estar vacío";
  } else if (state.precio === "") {
    errors.precio = "*El campo precio no puede estar vacío";
  } else if (
    isNaN(state.precio) ||
    state.precio < 1 ||
    state.precio > 3000000
  ) {
    errors.precio = "*Precio debe ser un número entre 1 y 3,000,000";
  }

  if (state.descuento === undefined) {
    errors.descuento = "*El campo descuento no puede estar vacío";
  } else if (state.descuento === "") {
    errors.descuento = "*El campo descuento no puede estar vacío";
  } else if (
    isNaN(state.descuento) ||
    state.descuento < 0 ||
    state.descuento > 99
  ) {
    errors.descuento = "*Descuento debe ser un número entre 0 y 99";
  }

  if (state.stock === undefined) {
    errors.stock = "*El campo stock no puede estar vacío";
  } else if (state.stock === "") {
    errors.stock = "*El campo stock no puede estar vacío";
  } else if (state.stock === "0") {
    errors.stock = "*Debes tener stock del producto";
  } else if (isNaN(state.stock) || state.stock < 0) {
    errors.stock = "*Stock debe ser mayor a 0";
  }

  if (state.categoriaSeleccionada.length === Number(0)) {
    errors.categoriaSeleccionada = "*El campo categoria no puede estar vacío";
  }

  if (state.imagen === undefined) {
    errors.imagen = "*El campo Reference Image no puede estar vacío";
  } else if (state.imagen === "") {
    errors.imagen = "*El campo Reference Image no puede estar vacío";
  }

  return errors;
};

export default validate;
