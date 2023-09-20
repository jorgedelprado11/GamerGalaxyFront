import OrdenadorPrecio from "../../components/Filtros/Ordenadores";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addToCart,
  filterArmaTuPc,
  filterComponentesArmaTuPc,
  getProducts,
} from "../../redux/actions/actionsUsers";
import CategoriasArmaTuPc from "../../components/CategoriasArmaTuPc/CategoriasArmaTuPc";
import { formatCurrency } from "../../../utils/format";
import { useNavigate } from "react-router";
import ReiniciarConfirmacion from "../../components/ReiniciarConfirmacion/ReiniciarConfirmacion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let i = 0;

const ArmaTuPc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const user = useSelector((state) => state.usuarioCreado);
  const [armaTuPc, setArmaTuPc] = useState([]);
  const [showReiniciarConfirmacion, setShowReiniciarConfirmacion] =
    useState(false);
  const [click, setClick] = useState(false);
  const quantity = 1;

  const agregado = () => {
    toast.success(`Tu pc se ha añadido al carrito!!!`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  // console.log("log de productos", productos);
  const handleClickMarca = (event) => {
    dispatch(filterArmaTuPc(event.target.value));
    setClick(true);
  };

  const handleClickPaquete = (event) => {
    let product = productos.filter(
      (producto) => producto.id_producto == event.target.value
    );

    setArmaTuPc([...armaTuPc, product[0]]);

    let producto = product[0];
    i < 7 && dispatch(filterComponentesArmaTuPc({ producto, i }));

    i++;
  };

  const reiniciar = () => {
    setArmaTuPc([]);
    setClick(false);
    setShowReiniciarConfirmacion(false);
    i = 0;
  };

  // todo el carrito

  const agregarAlCarro = () => {
    armaTuPc.map((producto) =>
      dispatch(
        addToCart({
          id_producto: producto.id_producto,
          quantity: 1,
          id_user: user.id,
        })
      )
    );
    agregado();
    setArmaTuPc([]);
    setClick(false);
    i = 0;

    navigate("/carrito");
  };

  // console.log("componentes arma tu pc desde el mismo", armaTuPc);
  // console.log('clic', click);

  let subTotal = 0;
  for (let i = 0; i < armaTuPc.length; i++) {
    subTotal += +Math.floor(armaTuPc[i].precio);
  }

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      setArmaTuPc([]);
      setClick(false);
      i = 0;
    };
  }, [dispatch]);

  return (
    <div>
      {click ? (
        <div className="w-auto my-8 flex flex-row mx-56">
          <div className="flex flex-col h-fit">
            <CategoriasArmaTuPc armaTuPc={armaTuPc} />
            <div className="flex flex-row h-8 pt-4 place-content-between">
              <button
                className="p-2 mb-4 border-4 bg-red-500 hover:bg-red-600 text-white font-bold w-full h-fit rounded-xl"
                onClick={() => setShowReiniciarConfirmacion(true)}
              >
                Reiniciar
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row bg-white h-12 w-auto m-3 rounded-xl items-center place-content-between ">
              <div className="flex flex-row px-2">
                <h3 className="px-2 ">SubTotal: </h3>
                <p className="text-blue-600">$ {formatCurrency(subTotal)}</p>
              </div>
              <div className="flex flex-row pr-4 pl-2">
                <h3 className="px-2 ">Pasos: </h3>
                <p>{i} de 8</p>
                {/* <h3 className="pl-4">{`Siguiente >`}</h3> */}
              </div>
            </div>
            {i == 8 ? (
              <div className="m-8">
                <div className="flex flex-row justify-between border-b-4 border-blue-600">
                  <h3 className="font-semibold text-lg">Productos</h3>
                  <h3 className="font-semibold text-lg">Precio</h3>
                </div>
                <div className="border-b-4 border-blue-600 my-2">
                  {armaTuPc.map((product) => (
                    <div className="flex flex-row justify-between mt-1">
                      <p className="mr-8">{product.nombre}</p>
                      <span>
                        $ {formatCurrency(Math.floor(product.precio))}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end justify-end">
                  <div className="flex flex-row my-2">
                    <h3 className="font-bold mr-4">SubTotal: </h3>{" "}
                    <p className="text-blue-600">
                      $ {formatCurrency(subTotal)}
                    </p>
                  </div>
                  <button
                    className="p-2 mb-4 border-4 bg-blue-600 text-white font-bold w-fit h-fit rounded-xl"
                    onClick={() => agregarAlCarro()}
                  >
                    Agregar todos los productos al Carrito
                  </button>
                </div>
              </div>
            ) : (
              <>
                <OrdenadorPrecio />
                {productos.length ? (
                  <>
                    {" "}
                    <CardsContainer
                      productos={productos}
                      handleClickPaquete={handleClickPaquete}
                    />
                  </>
                ) : (
                  <div className="m-8">
                    <p>
                      En este momento no contamos con productos compatibles con
                      tu selección.
                      <br />
                      Por favor presiona en el botón Reiniciar y elige otro
                      camino.
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="p-2 mb-4 border-4 bg-red-500 hover:bg-red-600 text-white font-bold w-24 h-fit rounded-xl"
                        onClick={() => setShowReiniciarConfirmacion(true)}
                      >
                        Reiniciar
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="h-3/5 relative">
          <div
            className=" bg-cover bg-center w-full h-[524px] flex flex-col items-center justify-center"
            style={{
              backgroundImage:
                'url("https://images8.alphacoders.com/595/595000.jpg")',
              backgroundBlendMode: "multiply", // Para mejorar el contraste de la imagen
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <h1 className="text-4xl font-bold text-white shadow-xl border-0 mb-16">
              ELIGE UNA MARCA
            </h1>
            <div className="flex flex-row">
              <div className="m-4 w-[408px] h-[230px] rounded-xl">
                <button
                  className="p-4 opacity-80 hover:opacity-100  rounded-xl w-[400px] h-[220px] bg-no-repeat bg-cover"
                  value="AMD"
                  onClick={(event) => handleClickMarca(event)}
                  style={{
                    backgroundImage:
                      'url("https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/amd-2344171.jpg?tf=1200x")',
                  }}
                ></button>
              </div>

              <div className="m-4 w-[408px] h-[230px] rounded-xl">
                <button
                  className="p-4 opacity-80 hover:opacity-100  rounded-xl w-[400px] h-[220px]  bg-no-repeat  bg-cover"
                  value="Intel"
                  onClick={(event) => handleClickMarca(event)}
                  style={{
                    backgroundImage:
                      'url("https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/06/procesador-intel-core-2383049.jpg?tf=1200x")',
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ReiniciarConfirmacion
        isOpen={showReiniciarConfirmacion}
        setIsOpen={setShowReiniciarConfirmacion}
        reiniciar={reiniciar}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};
export default ArmaTuPc;
