/** @format */

import React, { useState, useEffect } from "react";
import SidebarUser from "../../../components/SidebarUser/SidebarUser";
import { guardarToken } from "../../../redux/actions/actionsUsers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const UserPedidos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usuarioCreado);
  const infoToken = useSelector((state) => state.token);
  const [calificacion, setCalificacion] = useState(0);
  const [comentario, setComentario] = useState("");

  // Función para manejar cambios en la calificación
  const handleCalificacionChange = (event) => {
    setCalificacion(parseInt(event.target.value));
  };
  // Función para manejar cambios en el comentario
  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  return (
    <div className="h-screen flex">
      <SidebarUser />
      <main className="flex-1 p-4 bg-gray-200 mx-3 w-screen">
        <h1 className="text-2xl font-bold mb-4">
          <b>Mis Compras</b>
        </h1>
        <div className="bg-white p-4 rounded shadow">
          {/* Aquí puedes agregar contenido relacionado con las compras del usuario */}
          <h2 className="text-lg font-semibold mb-2">Historial de Compras</h2>
          {/* Agrega la lista de compras aquí */}
        </div>

        {/* Calificación:
          </label>
          <select
            id="calificacion"
            name="calificacion"
            value={calificacion}
            onChange={handleCalificacionChange}
            className="border rounded-lg px-3 py-2 w-full"
          >
            <option value={0}>Selecciona una calificación</option>
            <option value={1}>⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={5}>⭐⭐⭐⭐⭐</option>
          </select>
        </div> */}

        {/* Cuadro de Comentario */}
        {/* <div className="mt-4">
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
        </div> */}

        {/* Botón para enviar calificación y comentario */}
        <div className="mt-6">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            // onClick={enviarCalificacionYComentario}
          >
            Enviar Calificación y Comentario
          </button>
        </div>
      </main>
    </div>
  );
};
