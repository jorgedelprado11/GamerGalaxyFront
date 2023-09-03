export const Card = ({ producto }) => {
  return (
    <div className="mt-16 p-2 bg-transparent relative duration-1000 flex flex-col justify-center items-center h-[300px] max-w-[16rem] group">
      <div className="flex flex-col bg-white w-full h-auto border-2 rounded-lg shadow-xl items-center text-center transition-transform transform-gpu group-hover:scale-105 group-hover:rotate-2">
        <img
          className="w-4/5 h-40 mt-4"
          src={producto.Images[2]?.url || producto.Images[0]?.url}
          alt={producto.nombre}
        />
        <p className="text-black text-7 font-semibold h-20 pt-4 text-sm">
          {producto.nombre}
        </p>
      </div>
      <button
        className="mt-4 bg-blue-700 hover:bg-blue-500 animate-pulse text-white font-bold py-2 px-4 rounded-full"
        type="submit"
      >
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};