import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user, "linea 6");

    useEffect(() => {
        if (user)
            console.log(user.nickname), console.log(user.given_name), console.log(user.family_name), console.log(user.name);
        // console.log(isAuthenticated);
    }, [user, isAuthenticated])

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>Nombre: {user.given_name}</h2>
                <p>Apellido: {user.family_name}</p>
                <p>Correo electrónico: {user.email}</p>
                <p>{user.email}</p>



            </div>
        )
    );
};

export default Profile;