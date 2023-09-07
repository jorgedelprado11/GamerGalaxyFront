import OrdenadorPrecio from "../../components/Filtros/Ordenadores";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/actionsUsers";
import CategoriasArmaTuPc from "../../components/CategoriasArmaTuPc/CategoriasArmaTuPc";

const ArmaTuPcComponentes = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-auto my-8 flex flex-row mx-56">
      <div className="flex flex-col">
        <CategoriasArmaTuPc />
        <div className="flex flex-row h-8 pt-4 place-content-between">
          <button className="p-2">Reiniciar</button>
          <button className="p-2">Comprar</button>
        </div>
      </div>
      <div>
        <div className="flex flex-row bg-white h-12 w-auto m-3 rounded-xl items-center place-content-between ">
          <div className="flex flex-row px-2">
            <h3 className="px-2 ">SubTotal: </h3>
            <p>$120000</p>
          </div>
          <div className="flex flex-row pr-4 pl-2">
            <h3 className="px-2 ">Pasos: </h3>
            <p>1 de 9</p>
            {/* <h3 className="pl-4">{`Siguiente >`}</h3> */}
          </div>
        </div>
        <OrdenadorPrecio />
        <CardsContainer productos={productos} />
      </div>
    </div>
  );
};

export default ArmaTuPcComponentes;
