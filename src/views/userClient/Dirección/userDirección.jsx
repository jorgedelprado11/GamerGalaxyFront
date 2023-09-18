/** @format */
import React, { useEffect, useState } from "react";
import SidebarUser from "../../../components/SidebarUser/SidebarUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getDireccion,
  postDireccion,
  putDireccion,
} from "../../../redux/actions/actionsUsers";
import { useNavigate } from "react-router-dom";

const UserDireccion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.usuarioCreado);

  const usuarioDireccion = useSelector((state) => state.direccion);
  const id_location_reducer = useSelector((state) => state.id_location);
  const [mostrarToggle, setMostrarToggle] = useState(false);

  console.log("location-->", id_location_reducer);
  // Función para activar o desactivar la edición de la dirección
  const desplegarDomocilio = (value) => {
    setMostrarToggle(value);
  };

  //formulario de dirección
  const [direccion, setDireccion] = useState({
    provincia: "",
    ciudad: "",
    calle: "",
    codigo_postal: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDireccion({ ...direccion, [name]: value });
  };
  console.log("primera direccion", direccion);
  const handleGuardarDomicilio = (e) => {
    e.preventDefault();

    dispatch(putDireccion(direccion, id_location_reducer));

    setMostrarToggle(false);
    setDireccion({
      provincia: "",
      ciudad: "",
      calle: "",
      codigo_postal: "",
    });
    dispatch(getDireccion(user.id));
    console.log("segunda direccion", direccion);
  };

  const crearDireccion = () => {
    dispatch(postDireccion(token, direccion));
  };
  console.log("id_location_reducer-->", id_location_reducer);
  console.log("usuarioDireccion-->", usuarioDireccion);
  /*  const handleButton = (e) => {
    e.preventDefault();
    dispatch(postDireccion(token));

   

    setDireccion({
      provincia: "",
      ciudad: "",
      calle: "",
      codigo_postal: "",
    });
    setEditar(false);
  }; */
  useEffect(() => {
    dispatch(getDireccion(user.id));
  }, [dispatch]);

  return (
    <div className="min-h-screen flex">
      {/* Barra lateral */}
      <aside className="bg-gray-800 w-64 p-4 text-white">
        <SidebarUser />
      </aside>
      {/* Contenido principal */}
      <main className="flex-1 p-4 bg-gray-200 shadow-md w-auto">
        <div className="max-w-lg shadow-md mx-auto mt-2 p-4 flex flex-col border-t-8 border-r-blue-700">
          {/* Información de dirección */}

          <div className="mt-0">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Dirección
            </h3>
            <p className="text-gray-800">
              <span className="font-semibold">Provincia:</span>{" "}
              {usuarioDireccion?.provincia}
              <br />
              <span className="font-semibold">Ciudad:</span>{" "}
              {usuarioDireccion?.ciudad}
              <br />
              <span className="font-semibold">Calle:</span>{" "}
              {usuarioDireccion?.calle}
              <br />
              <span className="font-semibold">Código Postal:</span>{" "}
              {usuarioDireccion?.codigo_postal}
              <br />
            </p>
          </div>
          <button
            className="mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => crearDireccion()}
          >
            Crear dirección
          </button>
          {/* Botón para editar dirección */}
          <button
            className="mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              desplegarDomocilio(true);
              //if (!usuarioDireccion) crearIdLocation();

              //dispatch(getDireccion(idUser));
              //
            }} //Agregar una función para manejar la edición
          >
            Editar Dirección
          </button>
          {/* Formulario de edición de dirección (mostrar u ocultar según sea necesario) */}
          {mostrarToggle && (
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
                      onClick={() => {
                        desplegarDomocilio(false);
                        setDireccion({
                          provincia: "",
                          ciudad: "",
                          calle: "",
                          codigo_postal: "",
                        });
                      }} // Cancelar edición
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleGuardarDomicilio}
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
