import { Card } from "../CardHome/CardHome";
import { Link } from "react-router-dom";

export const CardsContainer = ({ descuentos, indexCards, cardsUno }) => {
  return (
    <div className="h-3/5 ">
      <div className="flex items-center justify-center pt-20 mb-0 pb-0">
        <Link to="/productos" className="no-underline border-none">
          <h1 className="text-4xl font-bold text-white shadow-xl border-0 ">
            PRODUCTOS DESTACADOS
          </h1>
        </Link>
      </div>
      <div className="grid grid-cols-5 pb-20 px-20 ml-10">
        {descuentos
          ?.map((producto) => {
            return <Card producto={producto} key={producto.id_producto} />;
          })
          .slice(cardsUno, indexCards)}
      </div>
    </div>
  );
};
