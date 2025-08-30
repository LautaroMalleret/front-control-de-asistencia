import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

type GraficoAreaProps = {
    data: any[];
};

const cardinal = curveCardinal.tension(0.2);

const GraficoArea: React.FC<GraficoAreaProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
        <Area
          type={cardinal}
          dataKey="plan_unidades"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey="aceptadas"
          stroke="#9df79c"
          fill="#9df79c"
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey="rechazadas"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraficoArea;
