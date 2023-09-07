
import gabinete from "../../assets/ArmaTuPcImages/gabinete.png";
import cooler from "../../assets/ArmaTuPcImages/cooler.png";
import fuente from "../../assets/ArmaTuPcImages/fuente.png";
import gpu from "../../assets/ArmaTuPcImages/gpu.png";
import hdd from "../../assets/ArmaTuPcImages/hdd.png";
import monitor from "../../assets/ArmaTuPcImages/monitor.png";
import motherboard from "../../assets/ArmaTuPcImages/motherboard.png";
import ram from "../../assets/ArmaTuPcImages/ram.png";
import micro from "../../assets/ArmaTuPcImages/micro.png";

const CategoriasArmaTuPc = () => {



  return (
    <div className="flex flex-col items-start bg-white h-fit shadow-xl px-4 py-4 mt-3">
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={micro} alt="Microprocesador" />
        </div>
        <div className="p-1 w-44">
          <h3>Microprocesador</h3>
          <p className="text-xs">Todavía no seleccionaste Microprocesador</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={motherboard} alt="Motherboard" />
        </div>
        <div className="p-1 w-44">
          <h3>Motherboard</h3>
          <p className="text-xs">Todavía no seleccionaste Motherboard</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={ram} alt="Memoria RAM" />
        </div>
        <div className="p-1 w-44">
          <h3>Memoria RAM</h3>
          <p className="text-xs">Todavía no seleccionaste Memoria RAM</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={hdd} alt="Almacenamiento" />
        </div>
        <div className="p-1 w-44">
          <h3>Almacenamiento</h3>
          <p className="text-xs">Todavía no seleccionaste Almacenamiento</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={cooler} alt="Refrigeración" />
        </div>
        <div className="p-1 w-44">
          <h3>Refrigeración</h3>
          <p className="text-xs">Todavía no seleccionaste Refrigeración</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={gpu} alt="Gráfica" />
        </div>
        <div className="p-1 w-44">
          <h3>Gráfica</h3>
          <p className="text-xs">Todavía no seleccionaste Gráfica</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={fuente} alt="Fuente" />
        </div>
        <div className="p-1 w-44">
          <h3>Fuente</h3>
          <p className="text-xs">Todavía no seleccionaste Fuente</p>
        </div>
      </div>
      <div className="flex flex-row mt-2 w-60">
        <div className="w-20 flex items-center">
          <img className="w-14 h-14" src={gabinete} alt="Gabinete" />
        </div>
        <div className="p-1 w-44">
          <h3>Gabinete</h3>
          <p className="text-xs">Todavía no seleccionaste Gabinete</p>
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
