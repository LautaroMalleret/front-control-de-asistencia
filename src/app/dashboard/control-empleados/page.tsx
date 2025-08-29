"use client";
import { getEmpleados } from "@/app/api/empleados";
import Empleado from "@/app/models/empleado";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ModalNuevoEmpleado from "@/app/components/NuevoEmpleadoModal";

//Muestra la tabla con los empleados y un boton para agregar nuevos empleados
export default function ControlEmpleadosPage() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nuevoEmpleadoModalVisible, setNuevoEmpleadoModalVisible] = useState<boolean>(false);

  //Estilos para la tabla
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

  //Carga los empleados al cargar la pagina
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEmpleados();
        setEmpleados(data);
      } catch (error) {
        console.error("Error fetching empleados:", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  //Funcion para agregar un nuevo empleado
  async function nuevoEmpleado(empleado: Empleado) {
    try {
      const response = await fetch("/api/empleados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empleado),
      });
      if (response.ok) {
        const nuevoEmp = await response.json();
        setEmpleados([...empleados, nuevoEmp]);
        setNuevoEmpleadoModalVisible(false);
      } else {
        console.error("Error creating empleado:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating empleado:", error);
    }
  }
  //Columnas de la tabla
  const columns = [
    {
      name: "NOMBRE",
      selector: (row: Empleado) => row.nombre,
      sortable: true,
    },
    {
      name: "APELLIDO",
      selector: (row: Empleado) => row.apellido,
      sortable: true,
    },
    {
      name: "ROL",
      selector: (row: Empleado) => row.rol,
      sortable: true,
    },
    {
      name: "AREA",
      selector: (row: Empleado) => row.area,
      sortable: true,
    },
    {
      name: "TURNO",
      selector: (row: Empleado) => row.turno,
      sortable: true,
    },
  ];

  return (
    <div className="p-4 ">
      <h1 className="text-2xl text-center font-bold mb-4">
        LISTADO DE EMPLEADOS
      </h1>

      {/* <button onClick={() => setNuevoEmpleadoModalVisible(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mt-4">
        Agregar Empleado
      </button> */}

      <div>
        <DataTable
          className="z-30"
          columns={columns}
          data={empleados}
          pagination
          fixedHeader
          progressPending={loading}
          customStyles={customStyles}
        />
      </div>
      <div className="flex gap-4 justify-center z-40">
        {nuevoEmpleadoModalVisible && (
          <ModalNuevoEmpleado
            empleado={{} as Empleado}
            onClose={() => setNuevoEmpleadoModalVisible(false)}
            onSave={(empleado: Empleado) => {
              nuevoEmpleado(empleado);
            }}
          />
        )}
      </div>
    </div>
  );
}
