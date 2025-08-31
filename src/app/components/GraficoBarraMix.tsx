import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Cumplimiento from '../models/cumplimientos';

type GraficoBarraMixProps = {
    data: Cumplimiento[];
};

const GraficoBarraMix : React.FC<GraficoBarraMixProps> = ({data}) => {
  return (
      <ResponsiveContainer width="100%" height="100%" className="bg-gray-200 p-2 rounded-2xl my-3">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Legend/>
        <Bar dataKey="plan_unidades"  fill="#ffc658" opacity={0.7} />
          <Bar dataKey="aceptadas" stackId="a" fill="#00aa33" opacity={0.7} />
          <Bar dataKey="rechazadas" stackId="a" fill="#aa4444" opacity={0.7}/>
        </BarChart>
      </ResponsiveContainer>
    );
};

export default GraficoBarraMix;
