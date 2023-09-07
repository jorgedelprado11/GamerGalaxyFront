import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { clean, getProducts } from "../../redux/actions/actionsUsers";
// import arraydatabase from "../../db/data.json";
import { useDispatch, useSelector } from "react-redux";
import Categorias from "../../components/Categorias/Categorias";
import OrdenadorPrecio from "../../components/Filtros/Ordenadores";
import FiltrosMarcas from "../../components/Filtros/FiltrosMarcas";

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(clean());
    };
  }, [dispatch]);

  return (
    <div className="w-auto my-8 flex flex-row mx-56">
      <Categorias />

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
            productos={productos}
            // indexCards={indexCards}
            // cardsUno={cardsUno}
            // lastIndex={lastIndex}
            // firstIndex={firstIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Productos;
