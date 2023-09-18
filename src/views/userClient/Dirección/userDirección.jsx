/** @format */
import React, { useEffect, useState } from "react";
import SidebarUser from "../../../components/SidebarUser/SidebarUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getDireccion,
  postDireccion,
  putDireccion,
} from "../../../redux/actions/actionsUsers";

const UserDireccion = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.infoToken);
  const user = useSelector((state) => state.usuarioCreado);
  let id = user.id_location;
  const usuarioDireccion = useSelector((state) => state.direccion);

  const [editar, setEditar] = useState(false);

  // Función para activar o desactivar la edición de la dirección
  const editarDireccion = (value) => {
    setEditar(value);
  };

  const crearIdLocation = (e) => {
    dispatch(postDireccion(token));
  };
  //formulario de dirección
  const [direccion, setDireccion] = useState({
    provincia: "",
    ciudad: "",
    calle: "",
    codigo_postal: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDireccion({ ...direccion, [name]: value });
  };

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(putDireccion(direccion, id));
    setDireccion({
      provincia: "",
      ciudad: "",
      calle: "",
      codigo_postal: "",
    });
    setEditar(false);
  };
  useEffect(() => {
    dispatch(getDireccion(id));
  }, [dispatch]);
  console.log("id en useEffect", id);

  return (
    <div className="h-screen flex">
      {/* Barra lateral */}
      <SidebarUser />

      {/* Contenido principal */}
      <main className="flex-1 p-4 bg-gray-200 shadow-md w-auto">
        <div className="max-w-lg shadow-md mx-auto mt-2 p-4 flex flex-col border-t-8 border-r-blue-700">
          {/* Información de dirección */}

          {usuarioDireccion?.id_location == id && (
            <div className="mt-0">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Dirección
              </h3>
              <p className="text-gray-800">
                <span className="font-semibold">Provincia:</span>{" "}
                {usuarioDireccion.provincia}
                <br />
                <span className="font-semibold">Ciudad:</span>{" "}
                {usuarioDireccion.ciudad}
                <br />
                <span className="font-semibold">Calle:</span>{" "}
                {usuarioDireccion.calle}
                <br />
                <span className="font-semibold">Código Postal:</span>{" "}
                {usuarioDireccion.codigo_postal}
                <br />
              </p>
            </div>
          )}
          {/* Botón para editar dirección */}
          <button
            className="mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              editarDireccion(true);
              crearIdLocation();
            }} //Agregar una función para manejar la edición
          >
            Editar Dirección
          </button>
          {/* Formulario de edición de dirección (mostrar u ocultar según sea necesario) */}
          {editar && (
            <div className="mt-1 ">
              <h3 className="text-lg font-semibold mb-2">Editar Dirección</h3>
              <form className="space-y-2">
                <div className="flex flex-col">
                  <label htmlFor="provincia">Provincia</label>
                  <input
                    type="text"
                    name="provincia"
                    value={direccion.provincia}
                    onChange={handleForm}
                    className="border rounded-lg px-3 py-2"
                  />
                  <label htmlFor="ciudad">Ciudad</label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    value={direccion.ciudad}
                    onChange={handleForm}
                    className="border rounded-lg px-3 py-2"
                  />
                  <label htmlFor="calle">Calle</label>
                  <input
                    type="text"
                    name="calle"
                    value={direccion.calle}
                    onChange={handleForm}
                    className="border rounded-lg px-3 py-2"
                  />
                  <label htmlFor="codigo postal">Código Postal</label>
                  <input
                    type="text"
                    id="codigo_postal"
                    name="codigo_postal"
                    value={direccion.codigo_postal}
                    onChange={handleForm}
                    className="border rounded-lg px-3 py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                      onClick={() => editarDireccion(false)} // Cancelar edición
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      onClick={handleButton}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDireccion;
