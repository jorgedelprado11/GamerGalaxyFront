import { Card } from "../CardHome/CardHome";
import { Link } from "react-router-dom";

export const CardsContainer = ({ descuentos, indexCards, cardsUno }) => {
  return (
    <div className="h-3/5 ">
      <div className="grid grid-cols-5 p-20 ml-10">
        {descuentos
          ?.map((producto) => {
            return <Card producto={producto} key={producto.id} />;
          })
          .slice(cardsUno, indexCards)}
      </div>
      <div className="m-12 absolute inset-x-0 top-0 flex items-center justify-center z-10">
        <Link to="/productos" className="no-underline border-none">
          <h1 className="text-4xl font-bold text-white shadow-xl border-0 ">
            PRODUCTOS DESTACADOS
          </h1>
        </Link>
      </div>
    </div>
  );
};
