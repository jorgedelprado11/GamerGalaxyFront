import React from "react";
import lucas from "../../assets/equipo/front/lucas.jpeg";
import ronald from "../../assets/equipo/front/ronald.jpeg";
import macarena from "../../assets/equipo/back/maca.jpeg";
import nico1 from "../../assets/equipo/back/nico1.jpg";
import nico2 from "../../assets/equipo/back/nico2.jpg";
import andres from "../../assets/equipo/front/andres.jpeg";
import gonzalo from "../../assets/equipo/front/gonzalo.jpeg";
import jorge from "../../assets/equipo/front/jorge.jpeg";

const About = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Front Team
            </h2>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={andres} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Andrés Marin
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={gonzalo} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Gonzalo Aguetti
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={jorge} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Jorge del Prado
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={lucas}
                  alt="lucas"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Lucas Adragna
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={ronald} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Matias Rudas
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32 m-0 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 ">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Back Team
            </h2>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={nico2} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Nicolas Oviedo Rubiano
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={macarena} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Macarena Castillo Ruiz
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={nico1} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Nicolas Gutierrez Plaza
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Developer
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
