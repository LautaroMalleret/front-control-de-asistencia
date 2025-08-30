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
