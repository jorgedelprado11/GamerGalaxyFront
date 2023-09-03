import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDescuentos } from "../../redux/actions/actionsUsers";
import { CardsContainer } from "../../components/CardsContainerHome/CardsContainerHome";

const Home = () => {
  const dispatch = useDispatch();
  const descuentos = useSelector((state) => state.destacados);
  //PAGINACIÓN
  const [cantidadesDeCards, setCantidadDeCards] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const indexCards = currentPage * cantidadesDeCards;
  const cardsUno = indexCards - cantidadesDeCards;
  const totalPages = Math.ceil(descuentos.length / cantidadesDeCards);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 rounded-full ${
            i === currentPage ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          {""}
        </button>
      );
    }
    return pageNumbers;
  };
  useEffect(() => {
    dispatch(getDescuentos());
  }, [dispatch]);

  return (
    <div className="h-3/5 relative">
      <div
        className=" bg-cover bg-center w-full"
        style={{
          backgroundImage:
            'url("https://images8.alphacoders.com/595/595000.jpg")',
          backgroundBlendMode: "multiply", // Para mejorar el contraste de la imagen
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <CardsContainer
          descuentos={descuentos}
          indexCards={indexCards}
          cardsUno={cardsUno}
        />
        <button
          onClick={handlePrevPage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          disabled={currentPage === 1}
        >
        {"◀"}
        </button>
        <button
          onClick={handleNextPage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          disabled={currentPage === totalPages}
        >
          { "▶"}
        </button>
      </div>

      <div className="mt-2 flex items-center flex-col">
        <div className="flex items-center justify-center space-x-4">
          {renderPageNumbers()}
        </div>
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;