"use client"
import React, { useState } from "react";
import Incidencia from "../models/incidencia"
import DataTable, { SortOrder } from "react-data-table-component";

const IncidenciasTable: React.FC<{datatable: Incidencia[]}> = ({ datatable }) => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const columnas = [
    {
      name: "ID",
      selector: (row: Incidencia) => row.id,
      sortable: true
    },
    {
      name: "FECHA",
      selector: (row: Incidencia) => row.fecha,
      sortable: true,
      SortOrder: "desc" as SortOrder,
    },
    {
      name: "HORA",
      selector: (row: Incidencia) => row.hora,
      sortable: true,
    },
    {
      name: "IMAGEN",
      cell: (row: Incidencia, index: number) =>
        openImageIndex === index ? (
          <div className="flex flex-col items-center">
            <img src={row.imagen} alt="Incidencia" className="max-h-32 rounded shadow mb-2" />
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setOpenImageIndex(null)}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => setOpenImageIndex(index)}
          >
            Ver
          </button>
        ),
    }
  ];

  return (
    <div className="w-full h-full mb-10 py-10">
      <DataTable
        columns={columnas}
        data={datatable}
        pagination
        fixedHeader
        paginationRowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default IncidenciasTable;