import Empleado from "../models/empleado";

//Obtiene todos los empleados
export async function getEmpleados(): Promise<Empleado[]> {
  try {
    const res = await fetch("http://localhost:4000/api/empleados", {
    });
    if (!res.ok) {
      throw new Error("Failed to fetch empleados");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching empleados:", error);
    return [];
  }
}
