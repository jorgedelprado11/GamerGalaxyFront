import React, { useState, useRef } from "react";
import Preguntas from "./Preguntas";
import { useAuth0 } from '@auth0/auth0-react';
import emailjs from '@emailjs/browser';

function Ayuda() {
  const form = useRef();
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const [consultaEnviada, setConsultaEnviada] = useState(false);
  const [motivoConsulta, setMotivoConsulta] = useState("DEFAULT");
  const [textoConsulta, setTextoConsulta] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      window.alert("Debes iniciar sesión para poder enviar la consulta");
      loginWithPopup();
      return;
    }

    emailjs.sendForm('service_cas3gvi', 'template_chs9k2v', form.current, 'gwuVD2p851Uv2YQf1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setConsultaEnviada(true);
    alert("Tu consulta ha sido enviada, pronto tendrás una respuesta.");
    setMotivoConsulta("DEFAULT");
    setTextoConsulta("");
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-20 p-8 border border-gray-400 rounded-lg bg-blue-700">
        <h1 className="text-white h-16 text-3xl ml-8">Preguntas Frecuentes</h1>
        <Preguntas />
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="max-w-4xl mb-40 mt-20 mx-auto p-8 border border-gray-400 rounded-lg bg-blue-700">
          <h1 className="text-white h-16 text-3xl ml-8">
            Cual es tu consulta?
          </h1>
          <select
            id="consultas"
            value={motivoConsulta}
            onChange={(e) => setMotivoConsulta(e.target.value)}
            className="border border-gray-300 text-gray-900 rounded-lg block w-full h-10"
          >
            <option value="DEFAULT" hidden>
              Elige un motivo:
            </option>
            <option value="US">Consulta sobre un producto</option>
            <option value="CA">Consulta General</option>
            <option value="FR">Consulta sobre mi pedido</option>
            <option value="DE">Necesito ayuda para realizar una compra</option>
            <option value="DE">Consulta sobre mi envío</option>
            <option value="DE">Otras consultas</option>
          </select>
          <textarea
            id="message"
            rows="4"
            name="message"
            value={textoConsulta}
            onChange={(e) => setTextoConsulta(e.target.value)}
            className="mt-6 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Por favor, brindanos tu nombre y numero de telefono para tener mayores vinculos de contacto"
          ></textarea>
          <button
            type="submit"
            className="mt-4 text-black bg-white hover:bg-gray-300 font-medium rounded-lg test-sm px-4 py-2 ml-80"
          >
            Enviar Consulta
          </button>
        </div>
      </form>
    </div>
  );
}

export default Ayuda;