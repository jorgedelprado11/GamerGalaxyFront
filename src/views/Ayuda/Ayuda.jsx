import React, { useState, useRef } from "react";
import Preguntas from "./Preguntas";
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "@emailjs/browser";

function Ayuda() {
  const form = useRef();
  const { isAuthenticated, user, loginWithPopup } = useAuth0();

  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    email: email,
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      window.alert("Debes iniciar sesión para poder enviar la consulta");
      loginWithPopup();
      return;
    }

    emailjs.send(
      "service_f1ou3mw",
      "template_965ijpc",
      formData,
      "FgIpj6EIs2OgNlGJR"
    );

    setFormData({
      email: user.email,
      subject: "",
      message: "",
    });

    alert("Tu consulta ha sido enviada, pronto tendrás una respuesta.");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-20 p-8 border border-gray-400 rounded-lg bg-blue-700">
        <h1 className="text-white h-16 text-3xl ml-8">Preguntas Frecuentes</h1>
        <Preguntas />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mb-40 mt-20 mx-auto p-8 border border-gray-400 rounded-lg bg-blue-700"
      >
        <h1 className="text-white h-16 text-3xl ml-8">Cual es tu consulta?</h1>
        {user && (
          <select
            id="subject"
            type="text"
            name="email"
            onChange={handleChange}
            className="border border-gray-300 text-gray-900 rounded-lg block w-full h-10 mb-2"
          >
            <option value={user.email} name="email">
              Seleccione su email
            </option>
            <option value={user.email}>{user.email}</option>
          </select>
        )}
        <select
          id="subject"
          type="text"
          value={formData.subject}
          name="subject"
          onChange={handleChange}
          className="border border-gray-300 text-gray-900 rounded-lg block w-full h-10"
        >
          <option value="DEFAULT" hidden>
            Elige un motivo:
          </option>
          <option value="Sobre un producto">Consulta sobre un producto</option>
          <option value="General">Consulta General</option>
          <option value="Sobre mi pedido">Consulta sobre mi pedido</option>
          <option value="Necesito ayuda para realizar una compra">
            Necesito ayuda para realizar una compra
          </option>
          <option value="Sobre mi envío">Consulta sobre mi envío</option>
          <option value="Otras">Otras consultas</option>
        </select>

        <textarea
          id="message"
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-6 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Por favor, brindanos tu nombre y numero de telefono para tener mayores vinculos de contacto"
        ></textarea>
        <button
          type="submit"
          className="mt-4 text-black bg-white hover:bg-gray-300 font-medium rounded-lg test-sm px-4 py-2 ml-80"
        >
          Enviar Consulta
        </button>
      </form>

      {/*       <form onSubmit={handleSubmit} name={formData}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          >
            <option value="general">General</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form> */}
    </>
  );
}

export default Ayuda;
