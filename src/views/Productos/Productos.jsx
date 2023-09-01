import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/actionsUsers";
// import arraydatabase from "../../db/data.json";
import { useDispatch, useSelector } from "react-redux";
import Categorias from "../../components/Categorias/Categorias";
import OrdenadorPrecio from "../../components/Filtros/Ordenadores";

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos);
  // const productos = arraydatabase;

  // console.log("productos desde productos", productos);
  //crear paginado

  // console.log('desde productossss', productos);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-screen my-8 flex flex-row mx-56">
      
        <Categorias />
      
      <div>
        <OrdenadorPrecio />
        <CardsContainer
          productos={productos}
          // lastIndex={lastIndex}
          // firstIndex={firstIndex}
        />
      </div>
    </div>
  );
};

export default Productos;
