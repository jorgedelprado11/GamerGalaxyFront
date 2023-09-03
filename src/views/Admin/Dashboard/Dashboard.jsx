import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="mt-10 text-white text-center text-4xl">Dashboard</h1>
      <section className="mt-10 items-center flex flex-col">
        <p className="text-white text-left">Futuros Gráficos</p>
        <img src="./graficos.avif" alt="" className="rounded-xl" />
      </section>
    </div>
  );
};

export default Dashboard;
