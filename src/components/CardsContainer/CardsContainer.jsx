import Card from "../Card/Card";

const CardsContainer = ({
  productos,
  cardsUno,
  indexCards,
  handleClickPaquete,
}) => {
  // console.log("cardscontainer", productos);
  // console.log('desde la cardssss',productos);

  return (
    <div className="grid grid-cols-3">
      {
        productos?.map((producto) => (
          <Card
            key={producto.id_producto}
            producto={producto}
            handleClickPaquete={handleClickPaquete}
          />
        ))
        // .slice(cardsUno, indexCards)
      }
    </div>
  );
};

export default CardsContainer;
