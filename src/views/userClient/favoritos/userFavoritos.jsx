/** @format */

import SidebarUser from "../../../components/SidebarUser/SidebarUser";

export const UserFavoritos = () => {
  return (
    <div className="h-screen flex ">
      <SidebarUser />
      <main className="flex-1 p-4 bg-gray-200  shadow-md  mx-3 w-screen">
        <h1 className="text-4xl font-bold shadow-md  text-center text-blue-700 mt-4">
          Favoritos
        </h1>
      </main>
    </div>
  );
};
