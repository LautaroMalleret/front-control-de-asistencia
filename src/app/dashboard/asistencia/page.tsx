"use client";
import Asistencia from "@/app/models/asistencia";
import DataTable, { SortOrder } from "react-data-table-component";
import { useEffect, useState } from "react";
import { getAsistencias, getLlegadasTarde } from "@/app/api/asistencias";

// página de control de asistencias
export default function AsistenciaPage() {
  // estilos personalizados para la tabla
  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
        backgroundColor: "#f3f4f6",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e5e7eb",
      },
    },
    cells: {
      style: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#e5e7eb",
      },
    },
  };
  // marca de color para llegadas tarde
  const conditionalRowStyles = [
    {
      when: (cells: Asistencia) => cells.retraso_entrada != "00:00:00",
      style: {
        color: "rgba(250, 0, 0, 0.9)",
      },
    },
  ];
  
  const [asistencias, setAsistencias] = useState<Asistencia[]>([]); // todas las asistencias
  const [asistenciasTarde, setAsistenciasTarde] = useState<Asistencia[]>([]); // llegadas tarde

  const [loadingAsistenicas, setLoadingAsistencias] = useState<boolean>(true); // carga de todas las asistencias
  const [loadingTarde, setLoadingTarde] = useState<boolean>(true); // carga de llegadas tarde

  // obtener todas las asistencias
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAsistencias();
        setAsistencias(data);
      } catch (error) {
        console.error("Error fetching asistencias:", error);
      }

      setLoadingAsistencias(false);
    }
    fetchData();
  }, []);

  // obtener llegadas tarde
  useEffect(() => {
    async function getTarde() {
      try {
        const data = await getLlegadasTarde();
        setAsistenciasTarde(data);
      } catch (error) {
        console.error("Error fetching asistencias:", error);
      }
      setLoadingTarde(false);
    }
    getTarde();
  }, []);

  // definir columnas de la tabla
  const columnas = [
    {
      name: "ID",
      selector: (row: Asistencia) => row.empleado_id,
      sortable: true,
    },
    {
      name: "NOMBRE",
      selector: (row: Asistencia) => row.empleados.nombre,
      sortable: true,
    },
    {
      name: "APELLIDO",
      selector: (row: Asistencia) => row.empleados.apellido,
      sortable: true,
    },
    {
      name: "FECHA",
      selector: (row: Asistencia) => row.fecha,
      sortable: true,
      SortOrder: "desc" as SortOrder,
    },
    {
      name: "ENTRADA",
      selector: (row: Asistencia) => row.hora_ingreso,
      sortable: true,
    },
    {
      name: "SALIDA",
      selector: (row: Asistencia) =>
        row.hora_egreso ? row.hora_egreso : "N/A",
      sortable: true,
    },
    {
      name: "RETRASO",
      selector: (row: Asistencia) =>
        row.retraso_entrada ? row.retraso_entrada : "N/A",
      sortable: true,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center uppercase">
        Control de asistencia del personal
      </h1>
      {/* tabla de asistencias */}
      <DataTable
        columns={columnas}
        data={asistencias}
        pagination
        fixedHeader
        conditionalRowStyles={conditionalRowStyles}
        progressPending={loadingAsistenicas}
        customStyles={customStyles}
      />
      <h3 className="text-xl font-bold my-4 text-center">LLEGADAS TARDE</h3>

      {/* tabla de llegadas tarde */}
      <DataTable
        columns={columnas}
        data={asistenciasTarde}
        pagination
        fixedHeader
        progressPending={loadingTarde}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}
