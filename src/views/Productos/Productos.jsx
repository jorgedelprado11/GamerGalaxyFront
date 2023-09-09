import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { clear, getProducts } from "../../redux/actions/actionsUsers";
// import arraydatabase from "../../db/data.json";
import { useDispatch, useSelector } from "react-redux";
import Categorias from "../../components/Categorias/Categorias";
import OrdenadorPrecio from "../../components/Filtros/Ordenadores";
import FiltrosMarcas from "../../components/Filtros/FiltrosMarcas";

const Productos = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(18);
  const productos = useSelector((state) => state.productos);

  // paginado

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // cambiar de pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getProducts());
    setCurrentPage(1);
    return () => {
      dispatch(clear());
      setCurrentPage(1);
    };
  }, [dispatch]);

  return (
    <div className="w-auto my-8 flex flex-row mx-56">
      <Categorias setCurrentPage={setCurrentPage} />

      <div className="w-9/12">
        <div className="grid grid-cols-2 place-content-between">
          <OrdenadorPrecio />
          {/* <FiltrosMarcas /> */}
        </div>
        {!productos ? (
          <div className="m-8">
            <h2>No se encontraron productos</h2>
          </div>
        ) : (
          <CardsContainer
            productos={currentProducts}
            // indexCards={indexCards}
            // cardsUno={cardsUno}
            // lastIndex={lastIndex}
            // firstIndex={firstIndex}
          />
        )}
        <div className="flex justify-center mt-4 mb-1 w-full">
          <nav className="inline-flex">
            {/* Botón de página anterior */}
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`px-3 py-1 rounded-l-md ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
              }`}
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            {/* Botones de páginas */}
            {Array.from({
              length: Math.ceil(productos.length / productsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Botón de página siguiente */}
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`px-3 py-1 rounded-r-md ${
                currentPage === Math.ceil(productos.length / productsPerPage)
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
              }`}
              disabled={
                currentPage === Math.ceil(productos.length / productsPerPage)
              }
            >
              Siguiente
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Productos;
