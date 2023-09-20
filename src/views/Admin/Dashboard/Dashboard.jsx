import React from "react";
import { Card, Title, BarChart, Subtitle, DonutChart } from "@tremor/react";

const chartdata = [
  {
    name: "Pantallas",
    "Cantidad de articulos": 2488,
  },
  {
    name: "Procesadores",
    "Cantidad de articulos": 1445,
  },
  {
    name: "Mothers",
    "Cantidad de articulos": 743,
  },
];

const chartdata2 = [
  {
    name: "Memoria Patriot Viper",
    "Cantidad de articulos": 105,
  },
  {
    name: "Placa de Video XFX",
    "Cantidad de articulos": 75,
  },
  {
    name: "Monitor Samsung 32' ",
    "Cantidad de articulos": 68,
  },
];

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="mt-10 text-white text-center text-4xl">Bienvenidos</h1>
    </div>
  );
};

export default Dashboard;
