// import React from 'react';
// import { useState } from 'react';

// export default function Login({ setUser }) {
//   const [correo, setCorreo] = useState("");
//   const [contraseña, setContraseña] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (correo === "" || contraseña === "") {
//       setError(true)
//       return
//     }
//     setError(false)

//     setUser([correo])
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}>
//       <div className="relative z-0 w-full mb-6 group">
//         <input value={correo} onChange={e => setCorreo(e.target.value)} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electronico</label>
//       </div>
//       <div className="relative z-0 w-full mb-6 group">
//         <input value={contraseña} onChange={e => setContraseña(e.target.value)} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
//       </div>
//       <div className="grid md:grid-cols-2 md:gap-6">
//       </div>
//       <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
//       {error && <p>Todos los campos son obligatorios</p>}
//     </form>
//   )
// }
