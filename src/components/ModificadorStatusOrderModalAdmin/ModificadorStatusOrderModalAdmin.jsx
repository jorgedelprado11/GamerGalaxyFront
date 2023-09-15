import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modificarOrderStatus } from "../../redux/actions/actionsAdmin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import statusValidation from "./statusValidation";

function ModificadorStatusOrderModalAdmin({ setOpen, modifyNumber }) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");

  const [errorStatus, setErrorStatus] = useState("");

  const handleStatusChange = (event) => {
    const { name, value } = event.target;

    setStatus(value);
    setErrorStatus(statusValidation({ ...status, [name]: value }));
  };

  const modificado = (status) => {
    toast.success(
      `El status de la orden ${modifyNumber.id_order} ha sido modificado a ${status}
      `,
      {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!status) return alert("No has ingresado valores");
    if (errorStatus.status) {
      setErrorStatus("");
      setStatus("");

      return alert("Faltan Datos");
    }

    // Aquí puedes realizar alguna acción con los valores de precio y stock, como enviarlos a un servidor
    dispatch(
      modificarOrderStatus(modifyNumber.id_user, {
        id_order: modifyNumber.id_order,
        status: status,
      })
    );
    setOpen(false);
    modificado(status);
  };
  return (
    <div>
      {setOpen ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"></div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col items-center">
                  {modifyNumber && (
                    <>
                      <div className="flex flex-col border-b-4 border-blue-600 ml-4 w-5/6 text-black">
                        <h2 className="text-center mb-5 text-5xl ">
                          Editar Status
                        </h2>
                        <form
                          action=""
                          className="border border-black text-black text-left"
                          onSubmit={handleSubmit}
                        >
                          <h3 className="text-center text-3xl text-blue-700">
                            ID ORDER:{modifyNumber.id_order}
                          </h3>
                          <h3 className="text-center text-xl text-blue-700 ">
                            {modifyNumber.email}
                          </h3>

                          <div className="ml-3 mt-3">
                            <label htmlFor="">Status: </label>

                            <select
                              name=""
                              id=""
                              value={status}
                              onChange={handleStatusChange}
                            >
                              <option>Seleccionar</option>
                              <option value="Finalizado">Finalizado</option>
                              <option value="Cancelado">Cancelado</option>
                            </select>
                            <input
                              type="text"
                              placeholder={modifyNumber.status}
                              value={status}
                              className="ml-2"
                            />
                          </div>

                          <div className="flex mb-3 ml-3 mr-3 mt-5">
                            <button
                              type="submit"
                              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full mt-1"
                            >
                              Guardar
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full mt-1"
                              onClick={() => setOpen(false)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </form>
                      </div>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-6 inline-flex  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-32"
                  >
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/*       <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </div>
  );
}

export default ModificadorStatusOrderModalAdmin;
