import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getByCategories,
  getSubCategories,
} from "../../redux/actions/actionsUsers";

const Categorias = ({setCurrentPage }) => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categorias);
  const subCategorias = useSelector((state) => state.subCategorias);

  const [menu, setMenu] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });

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
    setCurrentPage(1);
  };
  const toggleMenu = (event) => {
    // console.log(event.target.value);
    // console.log("antes de", menu);

    setMenu({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      [event.target.value]: !menu[event.target.value],
    });

    // console.log("despues de", menu);
  };

  return (
    <div className="flex flex-col items-start bg-white h-fit shadow-xl px-4 py-4 mt-3">
      {categorias?.map((categoria) => (
        <div className="w-full" key={categoria.nombre}>
          <button
            className=" items-start m-0 bg-slate-50 flex w-full pb-1 border-b-2 border-gray-100"
            value={categoria.id_agrupador}
            onClick={(event) => toggleMenu(event)}
          >
            {categoria.nombre}
          </button>

          <div>
            <nav>
              <ul
                className={` ${
                  menu[categoria.id_agrupador] ? "h-auto" : "invisible h-0"
                }`}
              >
                {subCategorias?.map(
                  (subcat) =>
                    subcat.id_macroCategory === categoria.id_agrupador && (
                      <li className="ml-8" key={subcat.id_categoria}>
                        <button
                          className="text-blue-900 text-sm"
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
