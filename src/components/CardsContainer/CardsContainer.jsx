import Card from "../Card/Card";

const CardsContainer = ({ productos, cardsUno, indexCards }) => {
  // console.log("cardscontainer", productos);
  // console.log('desde la cardssss',productos);

  return (
    <div className="grid grid-cols-3">
      {productos
        ?.map((producto) => (
          <Card key={producto.id_producto} producto={producto} />
        ))
        // .slice(cardsUno, indexCards)
        }
    </div>
  );
};

export default CardsContainer;
