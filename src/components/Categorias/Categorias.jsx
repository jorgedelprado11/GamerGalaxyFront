import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getByCategories,
  getSubCategories,
} from "../../redux/actions/actionsUsers";

const Categorias = () => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias);
  const subCategorias = useSelector((state) => state.subCategorias);

  // const [menu, setMenu] = useState({
  //   Pantallas: false,
  //   Procesadores: false,
  //   Mothers: false,
  //   GPU: false,
  //   Memorias: false,
  //   Almacenamiento: false,
  //   Refrigeración: false,
  //   Gabinetes: false,
  //   Fuentes: false,
  //   Perisféricos: false,
  //   Conectividad: false,
  // });

  // console.log("categorias: ", categorias);

  // console.log("subcategorias:", subCategorias);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, [dispatch]);

  const onClickCategories = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    dispatch(getByCategories(event.target.value));
  };
  // const toggleMenu = (event) => {
  //   console.log(event.target.value);
  //   setMenu({ [event.target.value]: !event.target.value });
  // };

  return (
    <div className="flex flex-col items-start bg-white h-fit shadow-xl px-4 py-4 mt-3">
      {categorias?.map((categoria) => (
        <div className="w-full" key={categoria.nombre}>
          <button
            className=" items-start m-0 p-0 bg-slate-100 flex w-full"
            value={
              categoria.nombre === "Placas de Video" ? "GPU" : categoria.nombre
            }
            onClick={(event) => toggleMenu(event)}
          >
            {categoria.nombre}
          </button>

          <div>
            <nav>
              <ul
              // className={` ${
              //   menu[categoria.nombre] ? "h-auto" : "invisible h-0"
              // }`}
              >
                {subCategorias?.map(
                  (subcat) =>
                    subcat.id_macroCategory === categoria.id_agrupador && (
                      <li className="ml-8" key={subcat.id_categoria}>
                        <button
                          className="text-blue-900"
                          onClick={onClickCategories}
                          value={subcat.id_categoria}
                        >
                          {subcat.nombre}
                        </button>
                      </li>
                    )
                )}
              </ul>
            </nav>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categorias;
