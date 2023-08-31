import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/actionsUsers";
// import arraydatabase from "../../db/data.json";
import { useDispatch, useSelector } from "react-redux";

const Productos = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.productos);
  // const productos = arraydatabase;

  console.log("productos desde productos", productos);
  //crear paginado

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <CardsContainer
        productos={productos}
        // lastIndex={lastIndex}
        // firstIndex={firstIndex}
      />
    </>
  );
};

export default Productos;
