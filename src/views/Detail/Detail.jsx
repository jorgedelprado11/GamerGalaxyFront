function Detail({ setOpen, producto }) {
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
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div> */}
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col items-center">
                  {producto && (
                    <>
                      <img
                        className="w-40 h-40"
                        src={producto.Images[0].url}
                        alt={producto.nombre}
                      />
                      <div className="flex flex-col border-b-4 border-blue-600 ml-4 w-5/6">
                        <div className="flex text-justify">
                          <h3 className="font-semibold">NOMBRE: </h3>
                          <p className="ml-2">{producto.nombre}</p>
                        </div>
                        <div className="flex text-justify">
                          <h3 className="font-semibold">CALIFICACION: </h3>
                          <p className="ml-2">{producto.calificacion}</p>
                        </div>
                        <div className="flex text-justify">
                          <h3 className="font-semibold">PRECIO: </h3>
                          <p className="ml-2">${producto.precio}</p>
                        </div>
                        <div className="flex text-justify">
                          <h3 className="font-semibold">STOCK: </h3>
                          <p className="ml-2">
                            {producto.stock ? producto.stock : "Sin Stock"}
                          </p>
                        </div>
                        <div className="flex text-justify">
                          <h3 className="font-semibold">GARANTIA: </h3>
                          <p className="ml-2">{producto.garantia} meses</p>
                        </div>
                      </div>
                      <div className="flex flex-col border-b-4 border-blue-600 ml-4 mt-4 w-5/6">
                        {producto &&
                          producto?.SpecificationValues.map((caract) => (
                            <div className="flex text-justify">
                              <h3 className="font-semibold">
                                {caract.Specification.name
                                  .split("_")
                                  .join(" ")
                                  .toUpperCase()}
                                :
                              </h3>
                              <p className="ml-2">{caract.value}</p>
                            </div>
                          ))}
                      </div>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-6 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
                  >
                    Salir del Detalle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
