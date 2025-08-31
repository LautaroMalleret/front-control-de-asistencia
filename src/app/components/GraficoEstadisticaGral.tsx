import React from "react";
import Estadistica from "../models/estadistica";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";


type GraficoVerticalProps = {
  data: Estadistica[];
};

const GraficoEstadisticaGral: React.FC<GraficoVerticalProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="fecha" type="category" />
        <YAxis  type="number"/>
        <Tooltip />
        <Legend />
        <ReferenceLine y={850} label="Min" stroke="red" />

        <Bar dataKey="disponibilidad" fill="#3498db"  opacity={0.9}/>
        <Bar dataKey="cumplimiento"  fill="#f1c40f" opacity={0.9} />
        <Bar dataKey="calidad"  fill="#16a085" opacity={0.8}/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default GraficoEstadisticaGral;
