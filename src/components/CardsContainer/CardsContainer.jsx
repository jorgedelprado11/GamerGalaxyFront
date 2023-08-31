import Card from "../Card/Card";

const CardsContainer = ({ productos }) => {
  // console.log("cardscontainer", productos);

 
  return (
    <div>
      {productos?.map((producto) => (
        {},
        <Card key={producto.id_producto} producto={producto} />
      ))}
    </div>
  );
};

export default CardsContainer;
