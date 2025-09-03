import Empleado from "../models/empleado";
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Next.js

//Obtiene todos los empleados
export async function getEmpleados(): Promise<Empleado[]> {
  try {
    const res = await fetch(`${apiUrl}/api/empleados`, {
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


export async function guardarEmpleado(empleado: Empleado) {
  try {
    const res = await fetch(`${apiUrl}/api/empleados`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empleado),
    });
    if (!res.ok) throw new Error("Error al guardar empleado");
    return await res.json();
  } catch (error) {
    console.error("Error guardando empleado:", error);
    return null;
  }
}