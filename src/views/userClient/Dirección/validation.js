/** @format */
export const validation = (data) => {
  const errors = {};

  // Valida el campo "provincia"
  if (/\d/.test(data.provincia)) {
    errors.provincia = "La provincia no puede contener números";
  }
  if (!data.provincia.trim()) {
    errors.provincia = "La provincia es obligatoria";
  }

  // Valida el campo "ciudad"
  if (/\d/.test(data.ciudad)) {
    errors.ciudad = "La ciudad no puede contener números";
  }
  if (!data.ciudad.trim()) {
    errors.ciudad = "La ciudad es obligatoria";
  }

  // Valida el campo "calle"
  if (!data.calle.trim()) {
    errors.calle = "La calle es obligatoria";
  }

  // Valida el campo "codigo_postal"
  if (!data.codigo_postal.trim()) {
    errors.codigo_postal = "El código postal es obligatorio";
  } else if (!/^\d{4}$/.test(data.codigo_postal)) {
    errors.codigo_postal = "El código postal debe tener 4 dígitos";
  }

  return errors;
};
