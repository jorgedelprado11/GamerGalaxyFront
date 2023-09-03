import React from "react";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col mt-20">
      <footer className="h-fit w-full p-8 bg-blue-700 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-white sm:text-center">
          ©{" "}
          <a href="http://127.0.0.1:5173/home" className="hover:underline">
            GamerGalaxy2023™
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0"></ul>
        <div className="flex justify-between items-center h-12">
          <Link to={"/admin"}>
            <button className="mr-20 mt-4">
              <a href="#" className="mr-4 hover:underline md:mr-10">
                <ComputerDesktopIcon className="h-8 w-8 mt-2 text-white" />
              </a>
            </button>
          </Link>
          <Link to={"/productos"}>
            <button className="text-white">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Todos los productos
              </a>
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
