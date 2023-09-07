import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import amd from "../../assets/ArmaTuPcImages/AMD.webp";
import intel from "../../assets/ArmaTuPcImages/intel.webp";
import ArmaTuPcComponentes from "./ArmaTuPcComponentes";

const ArmaTuPc = () => {
  return (
    <div className="h-3/5 relative">
      <div
        className=" bg-cover bg-center w-full h-[524px] flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images8.alphacoders.com/595/595000.jpg")',
          backgroundBlendMode: "multiply", // Para mejorar el contraste de la imagen
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 className="text-4xl font-bold text-white shadow-xl border-0 mb-16">
          ELIGE UNA MARCA
        </h1>
        <div>
          <NavLink to="/armatupc/amd/componentes">
            <button className="opacity-80 hover:opacity-100">
              <img
                src={amd}
                alt="AMD"
                className="w-[408px] h-[252px] rounded-xl m-4"
              />
            </button>
          </NavLink>

          <NavLink to="/armatupc/intel/componentes">
            <button className="opacity-80 hover:opacity-100">
              <img
                src={intel}
                alt="Intel"
                className="w-[408px] h-[252px] rounded-xl m-4"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ArmaTuPc;
