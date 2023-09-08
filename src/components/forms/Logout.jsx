
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";


const LogoutButton = () => {

  const { user, isAuthenticated, logout } = useAuth0();
  const [showOptions, setShowOptions] = useState(false);
  const [mouseInside, setMouseInside] = useState(false);
  const navigate = useNavigate();
  const userName = user.given_name || user.nickname;

  const handleMouseEnter = () => {
    setShowOptions(true);
    setMouseInside(true);
  };

  const handleMouseLeave = () => {
    setMouseInside(false);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    if (!mouseInside) {
      const timer = setTimeout(() => {
        setShowOptions(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [mouseInside]);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isAuthenticated ? (
        <div>

          <button className="cursor-pointer flex bg-blue-700 rounded-lg h-14 items-center w-64 justify-center text-white">
            {" "}
            <UserCircleIcon className="h-8 w-10" /> Hola, {userName}
          </button>
          {showOptions && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  onClick={() => navigate("/user")}

          <button className="cursor-pointer flex bg-blue-700 rounded-lg h-14 items-center w-64 justify-center text-white"> <UserCircleIcon className="h-8 w-10" /> Hola, {userName}</button>
          {showOptions && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={()=>navigate("/profile")}

                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                  role="menuitem"
                >
                  Mi perfil
                </button>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                  role="menuitem"
                >

                  Cerrar Sesión         

                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button className="cursor-pointer">Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};


export default LogoutButton;

