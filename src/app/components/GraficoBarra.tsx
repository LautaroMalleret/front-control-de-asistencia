"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type GraficoBarraProps = {
  data: any[];
  keys: string[];
};

// Componente de gráfico de barras reutilizable 
// que recibe datos y claves como props
const GraficoBarra: React.FC<GraficoBarraProps> = ({ data, keys }) => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraficoBarra;
