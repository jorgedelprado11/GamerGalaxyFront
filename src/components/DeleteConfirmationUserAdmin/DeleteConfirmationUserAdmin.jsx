import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteConfirmationUserAdmin = ({
  isOpen,
  onCancel,
  onConfirm,
  deleteNumber,
  setCurrentPage,
}) => {
  if (!isOpen) {
    return null;
  }

  const eliminar = (id) => {
    toast.error(`El usuario ${id} ha sido eliminado`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>
          ¿Estás seguro de que quieres eliminar este usuario {deleteNumber}?
        </p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              eliminar(deleteNumber);
              onConfirm(deleteNumber);
              onCancel();
              setCurrentPage(1);
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationUserAdmin;
