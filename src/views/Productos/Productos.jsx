import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions/actionsUsers";
// import arraydatabase from "../../db/data.json";
import { useDispatch, useSelector } from "react-redux";
import Categorias from "../../components/Categorias/Categorias";
import OrdenadorPrecio from "../../components/Filtros/Ordenadores";

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos);

  //paginación
  // const [cantidadesDeCards, setCantidadDeCards] = useState(21);
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexCards = currentPage * cantidadesDeCards;
  // const cardsUno = indexCards - cantidadesDeCards;

  // const totalPages = Math.ceil(productos.length / cantidadesDeCards);

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const renderPageNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= totalPages; i++) {
  //     pageNumbers.push(
  //       <button
  //         key={i}
  //         onClick={() => setCurrentPage(i)}
  //         className={`w-8 h-10 rounded-full ${
  //           i === currentPage ? "bg-blue-500" : "bg-gray-300"
  //         }`}
  //       >
  //         {""}
  //       </button>
  //     );
  //   }
  // };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-auto my-8 flex flex-row mx-56">
      <Categorias />

      {!productos.length ? (
        <div className="m-8">
          <h2>No existen productos con el nombre que búscas</h2>
        </div>
      ) : (
        <div>
          <OrdenadorPrecio />
          <CardsContainer
            productos={productos}
            // indexCards={indexCards}
            // cardsUno={cardsUno}
            // lastIndex={lastIndex}
            // firstIndex={firstIndex}
          />

          {/* paginado 
          <div className="flex items-center justify-items-center">
            <button
              onClick={handlePrevPage}
              className="page"
              disabled={currentPage === 1}
            >
              ⬅
            </button>

            <div className="flex items-center flex-col mt-8">
              <div className="flex items-center justify-center space-x-4">
                {renderPageNumbers()}
              </div>
              <div className="flex items-center mt-4 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <div key={i}>{i}</div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNextPage}
              className="page"
              disabled={currentPage === totalPages}
            >
              ➡
            </button>
          </div>*/}
        </div>
      )}
    </div>
  );
};

export default Productos;
