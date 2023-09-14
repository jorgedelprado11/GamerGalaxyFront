import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modificarUsuario } from "../../redux/actions/actionsAdmin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailValidation from "./emailValidation";
import firstNameValidation from "./firstNameValidation";
import lastNameValidation from "./lastNameValidation";
import phoneNumberValidation from "./phoneNumberValidation";
import usernameValidation from "./usernameValidation";

function ModificadorProductsModalAdmin({ setOpen, modifyNumber }) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.infoToken);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [errorUsername, setErrorUsername] = useState("");

  const modificado = (id) => {
    toast.success(`El usuario ${id} ha sido modificado`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setEmail(value);
    setErrorEmail(emailValidation({ ...email, [name]: value }));
  };

  const handleFirstName = (event) => {
    const { name, value } = event.target;
    setFirstName(value);
    setErrorFirstName(firstNameValidation({ ...firstName, [name]: value }));
  };

  const handleLastName = (event) => {
    const { name, value } = event.target;
    setLastName(value);
    setErrorLastName(lastNameValidation({ ...lastName, [name]: value }));
  };

  const handlePhoneNumber = (event) => {
    const { name, value } = event.target;
    setPhoneNumber(value);
    setErrorPhoneNumber(
      phoneNumberValidation({ ...phoneNumber, [name]: value })
    );
  };

  const handleUsername = (event) => {
    const { name, value } = event.target;
    setUsername(value);
    setErrorUsername(usernameValidation({ ...username, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (!email && !firstName && !lastName && !phoneNumber && !username)
      return alert("No has ingresado valores");
    if (
      errorEmail.email ||
      errorFirstName.firstName ||
      errorLastName.lastName ||
      errorPhoneNumber.phoneNumber ||
      errorUsername.username
    ) {
      setErrorEmail("");
      setErrorFirstName("");
      setErrorLastName("");
      setErrorPhoneNumber("");
      setErrorUsername("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setUsername("");
      return alert("Faltan Datos");
    }
    // Aquí puedes realizar alguna acción con los valores de precio y stock, como enviarlos a un servidor
    dispatch(
      modificarUsuario(
        modifyNumber.id,
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          username: username,
        },
        token
      )
    );
    setOpen(false);
    modificado(modifyNumber.id);
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
                          Editar Usuario
                        </h2>
                        <form
                          action=""
                          className="border border-black text-black text-left"
                          onSubmit={handleSubmit}
                        >
                          <div className="text-center text-3xl text-blue-700">
                            <label htmlFor="" className="text-center">
                              ID: {modifyNumber.id}
                            </label>
                          </div>
                          <div className="ml-3">
                            <label htmlFor="">UserName: </label>
                            <input
                              type="text"
                              onChange={handleUsername}
                              placeholder={modifyNumber.username}
                            />
                          </div>
                          <span>{errorUsername.username}</span>
                          <div className="ml-3">
                            <label htmlFor="">Email: </label>
                            <input
                              type="text"
                              onChange={handleEmailChange}
                              placeholder={modifyNumber.email}
                              className="w-56"
                            />
                          </div>
                          <span>{errorEmail.email}</span>
                          <div className="ml-3">
                            <label htmlFor="">FirstName: </label>
                            <input
                              type="text"
                              onChange={handleFirstName}
                              placeholder={modifyNumber.firstName}
                            />
                          </div>
                          <span>{errorFirstName.firstName}</span>
                          <div className="ml-3">
                            <label htmlFor="">LastName: </label>
                            <input
                              type="text"
                              onChange={handleLastName}
                              placeholder={modifyNumber.lastName}
                            />
                          </div>
                          <span>{errorLastName.lastName}</span>
                          <div className="ml-3">
                            <label htmlFor="">Phone: </label>
                            <input
                              type="text"
                              onChange={handlePhoneNumber}
                              placeholder={modifyNumber.phoneNumber}
                            />
                          </div>
                          <span>{errorPhoneNumber.phoneNumber}</span>
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
      <ToastContainer
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
      />
    </div>
  );
}

export default ModificadorProductsModalAdmin;
