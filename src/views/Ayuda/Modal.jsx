import React, { useState } from 'react'
import Register from '../../components/forms/Register';
import Login from '../../components/forms/Login';

function Modal({ setOpen }) {
    const [type, setType] = useState("login");
    const [user, setUser] = useState([]);
    return (
        <div>
            {
                setOpen ?
                    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                {
                                                    type === "login" ? <Login setUser={setUser} /> : <Register />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        {
                                            type === "login" ?
                                                <button type="button"
                                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
                                                    onClick={() => setType("register")}>No tengo cuenta</button> : <button
                                                        type="button"
                                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
                                                        onClick={() => setType("login")}>Ya tengo cuenta</button>
                                        }


                                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setOpen(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
            {
                !user.length > 0
                    ? <Login setUser={setUser} />
                    : setOpen(false)
            }
        </div>
    )
}

export default Modal;
