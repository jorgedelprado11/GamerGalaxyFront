/** @format */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDescuentos } from "../../redux/actions/actionsUsers";
import { CardsContainer } from "../../components/CardsContainerHome/CardsContainerHome";
import SearchProduct from "../../components/Searchbar/Serchbar";

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
          className={`w-8 h-10 rounded-full ${
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
    <div className="bg-cover bg-center h-screen flex flex-col items-center justify-center w-screen">
      <SearchProduct />
      {/* <button
        onClick={handlePrevPage}
        className="page"
        disabled={currentPage === 1}
      > 
        ⬅
      </button>  */}
      <CardsContainer
        descuentos={descuentos}
        indexCards={indexCards}
        cardsUno={cardsUno}
      />
      {/* <button
        onClick={handleNextPage}
        className="page"
        disabled={currentPage === totalPages}
      >
        ➡
      </button> */}
      <div className="flex items-center flex-col mt-8">
        <div className="flex items-center justify-center space-x-4">
          {renderPageNumbers()}
        </div>
        <div className="flex items-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
