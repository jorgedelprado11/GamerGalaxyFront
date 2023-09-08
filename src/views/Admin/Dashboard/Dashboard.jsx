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
    <div>
      <h1 className="mt-10 text-white text-center text-4xl">Dashboard</h1>
      <section className="flex flex-col items-center  bg-slate-700 justify-right w-full">
        {/* <p className="text-white text-left">Futuros Gráficos</p> */}
        {/* <img src="./graficos.avif" alt="" className="rounded-xl" /> */}

        {/*  <h2 className="text-white mt-10 text-lg">Stocks</h2> */}

        <section className="flex space-x-10 w-9/12">
          <div className="mt-10 w-3/6 text-xs">
            <Card>
              <Title>Cantidad de artículos vendidos por categoria</Title>
              <Subtitle>
                {/*                 The IUCN Red List has assessed only a small share of the total
                known species in the world. */}
              </Subtitle>
              <BarChart
                className="mt-6"
                data={chartdata}
                index="name"
                categories={["Cantidad de articulos"]}
                colors={["blue"]}
                /* valueFormatter={dataFormatter} */
                yAxisWidth={48}
              />
            </Card>
          </div>
          <div className="mt-10 w-3/6 text-xs">
            <Card>
              <Title>Top 3 artículos más vendidos</Title>
              <Subtitle>
                {/*                 The IUCN Red List has assessed only a small share of the total
                known species in the world. */}
              </Subtitle>
              <BarChart
                className="mt-6"
                data={chartdata2}
                index="name"
                categories={["Cantidad de articulos"]}
                colors={["blue"]}
                /* valueFormatter={dataFormatter} */
                yAxisWidth={48}
              />
            </Card>
          </div>
        </section>
        <section className="flex space-x-10">
          <div className="mt-10 w-80">
            <Card>
              <Title>Sales</Title>
              <DonutChart
                data={cities}
                category="sales"
                index="name"
                valueFormatter={valueFormatter}
                colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
              />
            </Card>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
