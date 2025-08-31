import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Rendimiento from '../models/rendimiento';


type GraficoTiempoProps = {
    data: Rendimiento[];
};

const GraficoTiempo: React.FC<GraficoTiempoProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="bg-gray-200 p-2 rounded-2xl my-3">
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
        <Area type="monotone" dataKey="plan_minutos" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="tiempo_operativo" stroke="#00ee33" fill="#00ee33" />

      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GraficoTiempo;
