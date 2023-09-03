/** @format */
import { Card } from "../CardHome/CardHome";

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
        <h1 className="text-4xl font-bold text-slate-900 text-decoration-line:4px underline transform">
          <span className="text-gray-400 shadow-xl">PRODUCTOS DESTACADOS</span>
        </h1>
      </div>
    </div>
  );
};
