/** @format */
import { Card } from "../CardHome/CardHome";

export const CardsContainer = ({ descuentos, indexCards, cardsUno }) => {
  return (
    <div
      className="grid grid-cols-5 h-full gap-2 p-12 bg-cover bg-center w-screen"
      style={{
        backgroundImage:
          'url("https://images8.alphacoders.com/595/595000.jpg")',
        backgroundBlendMode: "multiply", // Para mejorar el contraste de la imagen
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      {descuentos
        ?.map((producto) => {
          return <Card producto={producto} key={producto.id} />;
        })
        .slice(cardsUno, indexCards)}
    </div>
  );
};
