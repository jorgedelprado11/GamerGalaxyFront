/** @format */

import React, { useState, useEffect } from "react";
import SidebarUser from "../../../components/SidebarUser/SidebarUser";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getCalificaciones,
  getComentarios,
  guardarCalificacion,
  guardarComentario,
  guardarToken,
} from "../../../redux/actions/actionsUsers";
import { useNavigate } from "react-router-dom";

export const UserPedidos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usuarioCreado);
  const userInfo = useSelector((state) => state.token);
  const calificaciones = useSelector((state) => state.calificaciones);
  const comentarios = useSelector((state) => state.comentarios);
  const [editar, setEditar] = useState(false);
  const [calificacion, setCalificacion] = useState(0);
  const [comentario, setComentario] = useState("");
  const [selectedProduct, setSelectedProduct] = useState([null]); // Para almacenar el producto seleccionado

  const finalizado = userInfo?.filter((use) => use.status !== "cart");

  const handleCalificacionChange = (valor) => {
    setCalificacion(valor);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleCalificacionYComentario = () => {
    const id = user.id;

    if (selectedProduct) {
      const product = {
        ...selectedProduct,
        calificacion,
        comentario,
      };

      dispatch(guardarComentario(product, id));
      dispatch(guardarCalificacion(product, id));
    }
    // Reiniciar los campos de calificación y comentario y ocultar el formulario
    setCalificacion(0);
    setComentario("");
    setEditar(false);
    dispatch(guardarToken(user));
    // window.location.reload(false)
  };

  useEffect(() => {
    dispatch(guardarToken(user));
    dispatch(getComentarios());
    dispatch(getCalificaciones());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex">
      <aside className="bg-gray-800 w-64 p-4 text-white">
        <SidebarUser />
      </aside>
      <main className="flex-1 p-4 bg-gray-200 mx-3 w-screen">
        <h1 className="text-2xl font-bold mb-4">
          <b>Mis Pedidos</b>
        </h1>
        <h2 className="text-lg text-black font-semibold mb-2">
          Historial de Compras
        </h2>

        {finalizado?.map((info) => (
          <div key={info.id_order} className="bg-white p-4 rounded shadow mb-4">
            {/* Información del producto */}
            <h2>Número de Orden: {info.id_order}</h2>
            {info.Products?.map((info) => (
              <div className="border-t-2 border-gray-200 mt-4">
                <div>
                  <h3 className="font-semibold">{info.nombre}</h3>

                  <p>Precio por Unidad: ${info.precio}</p>

                  {
                    <div>
                      <p>
                        Comentario:
                        {
                          comentarios
                            ?.filter(
                              (comentario) =>
                                comentario.id_user == user.id &&
                                comentario.id_producto == info.id_producto
                            )
                            .map((comentario) => comentario.description)[0]
                        }
                      </p>

                      <p>
                        Calificación:
                        {
                          calificaciones?.filter(
                            (cali) =>
                              cali.id_user == user.id &&
                              cali.id_producto == info.id_producto
                          )[0]?.value
                        }
                      </p>
                    </div>
                  }
                </div>

                <div className="mt-6">
                  {comentarios?.filter(
                    (comentario) =>
                      comentario.id_user == user.id &&
                      comentario.id_producto == info.id_producto
                  ).length ? null : (
                    <button
                      type="button"
                      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
                      onClick={() => {
                        setEditar(true);
                        setSelectedProduct(info);
                        // Guardar el producto seleccionado
                      }}
                    >
                      Calificación y Comentario
                    </button>
                  )}
                </div>

                {editar && selectedProduct === info && (
                  <div>
                    {/* Calificación */}
                    <div>
                      <h2 className="text-lg text-black font-semibold my-1">
                        Calificación:
                      </h2>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((valor) => (
                          <span
                            key={valor}
                            className={`cursor-pointer text-2xl ${
                              valor <= calificacion
                                ? "text-yellow-500"
                                : "text-gray-400"
                            }`}
                            value={userInfo.id_producto}
                            onClick={() => handleCalificacionChange(valor)}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p>Calificación seleccionada: {calificacion}</p>
                    </div>
                    {/* Cuadro de Comentario */}
                    <div className="mt-2">
                      <label
                        htmlFor="comentario"
                        className="block text-lg font-semibold mb-2"
                      >
                        Comentario:
                      </label>
                      <textarea
                        id="comentario"
                        name="comentario"
                        value={comentario}
                        onChange={handleComentarioChange}
                        className="border rounded-lg px-3 py-2 w-full"
                        rows="4"
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        value={info.id_producto}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleCalificacionYComentario}
                      >
                        Enviar
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 m-2 rounded-full"
                        onClick={() => {
                          setSelectedProduct(null); // Reiniciar el producto seleccionado
                          setEditar(false);
                        }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};
