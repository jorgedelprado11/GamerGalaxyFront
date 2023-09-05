import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <span onClick={handleButtonClick}>Hola, {user.name}!</span>
          {showOptions && (
            <div>
              <button className="bg-red-500" onClick={handleLogout}>
                Logout
              </button>
              <Link to="/profile">
                <button onClick={handleButtonClick}>Mi cuenta</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button onClick={handleButtonClick}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;