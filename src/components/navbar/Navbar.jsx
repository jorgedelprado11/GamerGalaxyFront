/** @format */
import React, { useEffect } from "react";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import SearchProduct from "../Searchbar/Serchbar";
import LogoutButton from "../forms/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { guardarToken, guardarUsuario } from "../../redux/actions/actionsUsers";

const Navbar = () => {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  /*   const token = useSelector((state) => state.infoToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(guardarUsuario(user));

      setTimeout(() => {
        dispatch(guardarToken(user));
      }, 1000);
    }
  }, [user, isAuthenticated]);

  localStorage.setItem("token", token); */
  return (
    <div>
      <div className="flex bg-white justify-around h-28 items-center">
        <Link to={"/home"}>
          <img className="h-20" src={logo} alt="logo" />
        </Link>
        <SearchProduct />

        {!isAuthenticated ? (
          <button
            className="flex bg-blue-700 rounded-lg h-14 items-center w-64 justify-center text-white"
            onClick={() => {
              loginWithPopup();
            }}
          >
            <UserCircleIcon className="h-8 w-10" />
            Iniciar Sesión
          </button>
        ) : (
          <LogoutButton />
        )}
        <Link to={"/carrito"}>
          <button>
            <ShoppingCartIcon className="h-10 w-10" />
          </button>
        </Link>
      </div>

      <div className="flex bg-blue-700 justify-around h-28 items-center text-2xl text-white border-">
        <Link to={"/productos"}>
          <button className="hover:text-black">PRODUCTOS</button>
        </Link>

        <Link to={"/armatupc"}>
          <button className="hover:text-black">ARMA TU PC</button>
        </Link>

        <Link to={"/ayuda"}>
          <button className="hover:text-black">AYUDA</button>
        </Link>
        <Link to={"/about"}>
          <button className="hover:text-black">SOBRE NOSOTROS</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
