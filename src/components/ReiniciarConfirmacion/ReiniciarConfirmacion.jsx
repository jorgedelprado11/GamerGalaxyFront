import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReiniciarConfirmacion = ({ isOpen, setIsOpen, reiniciar }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>¿Estás seguro de que quieres reiniciar el Armado de tu PC?</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => reiniciar()}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReiniciarConfirmacion;
