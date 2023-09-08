import gabinete from "../../assets/ArmaTuPcImages/gabinete.png";
import cooler from "../../assets/ArmaTuPcImages/cooler.png";
import fuente from "../../assets/ArmaTuPcImages/fuente.png";
import gpu from "../../assets/ArmaTuPcImages/gpu.png";
import hdd from "../../assets/ArmaTuPcImages/hdd.png";
import monitor from "../../assets/ArmaTuPcImages/monitor.png";
import motherboard from "../../assets/ArmaTuPcImages/motherboard.png";
import ram from "../../assets/ArmaTuPcImages/ram.png";
import micro from "../../assets/ArmaTuPcImages/micro.png";

const CategoriasArmaTuPc = ({ armaTuPc }) => {
  // console.log(
  //   "a versale aca",
  //   armaTuPc.map((prod) => prod.Images[0]?.url)
  // );

  return (
    <div className="flex flex-col items-start bg-white h-fit shadow-xl px-4 py-4 mt-3">
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[0] ? armaTuPc[0]?.Images[0].url : micro}
            alt="Microprocesador"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Microprocesador</h3>
          <p className="text-xs">{`${
            armaTuPc[0]
              ? armaTuPc[0]?.nombre
              : "Todavía no seleccionaste Microprocesador"
          }`}</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[1] ? armaTuPc[1]?.Images[0].url : motherboard}
            alt="Motherboard"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Motherboard</h3>
          <p className="text-xs">{`${
            armaTuPc[1]
              ? armaTuPc[1]?.nombre
              : "Todavía no seleccionaste Motherboard"
          }`}</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[2] ? armaTuPc[2]?.Images[0].url : ram}
            alt="Memoria RAM"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Memoria RAM</h3>
          <p className="text-xs">{`${
            armaTuPc[2]
              ? armaTuPc[2]?.nombre
              : "Todavía no seleccionaste Memoria RAM"
          }`}</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[3] ? armaTuPc[3]?.Images[0].url : hdd}
            alt="Almacenamiento"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Almacenamiento</h3>
          <p className="text-xs">
            {`${
              armaTuPc[3]
                ? armaTuPc[3]?.nombre
                : "Todavía no seleccionaste Almacenamiento"
            }`}
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[4] ? armaTuPc[4]?.Images[0].url : cooler}
            alt="Refrigeración"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Refrigeración</h3>
          <p className="text-xs">
            {`${
              armaTuPc[4]
                ? armaTuPc[4]?.nombre
                : "Todavía no seleccionaste Refrigeración"
            }`}
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[5] ? armaTuPc[5]?.Images[0].url : gpu}
            alt="Gráfica"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Gráfica</h3>
          <p className="text-xs">{`${
            armaTuPc[5]
              ? armaTuPc[5]?.nombre
              : "Todavía no seleccionaste Gráfica"
          }`}</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[6] ? armaTuPc[6]?.Images[0].url : fuente}
            alt="Fuente"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Fuente</h3>
          <p className="text-xs">{`${
            armaTuPc[6]
              ? armaTuPc[6]?.nombre
              : "Todavía no seleccionaste Fuente"
          }`}</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img
            className="w-14 h-14"
            src={armaTuPc[7] ? armaTuPc[7]?.Images[0].url : gabinete}
            alt="Gabinete"
          />
        </div>
        <div className="p-1 w-44">
          <h3>Gabinete</h3>
          <p className="text-xs">{`${
            armaTuPc[7]
              ? armaTuPc[7]?.nombre
              : "Todavía no seleccionaste Gabinete"
          }`}</p>
        </div>
      </div>
      {/* <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={monitor} alt="Monitor" />
        </div>
        <div className="p-1 w-44">
          <h3>Monitor</h3>
          <p className="text-xs">Todavía no seleccionaste Monitor</p>
        </div>
      </div> */}
    </div>
  );
};

export default CategoriasArmaTuPc;
