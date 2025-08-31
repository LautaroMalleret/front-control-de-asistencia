import Cumplimiento from "../models/cumplimientos";
import Estadistica from "../models/estadistica";
import Rendimiento from "../models/rendimiento";
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Next.js

export async function getCumplimientosData(tipo_producto: string): Promise<Cumplimiento[]> {
    try {
      const res = await fetch(`${apiUrl}/api/produccion/cumplimiento/${tipo_producto}`, {
      });
      if (!res.ok) {
      throw new Error("Failed to fetch cumplimientos");
    }
    console.log(res);
    return res.json();
  } catch (error) {
    console.error("Error fetching cumplimientos:", error);
    return [];
  }
}

export async function getRendimientosData(tipo_producto: string): Promise<Rendimiento[]> {
  try {
    const res = await fetch(`${apiUrl}/api/produccion/rendimiento/${tipo_producto}`, {
    });
    console.log(res);
    if (!res.ok) {
    throw new Error("Failed to fetch rendimientos");
  }
  console.log(res);
  return res.json();
} catch (error) {
  console.error("Error fetching rendimientos:", error);
  return [];
}
}

export async function getEstadisticasData(tipo_producto: string): Promise<Estadistica[]> {
  try {
    const res = await fetch(`${apiUrl}/api/produccion/estadisticas/${tipo_producto}`, {
    });
    if (!res.ok) {
    throw new Error("Failed to fetch estadisticas");
  }
  console.log(res);
  return res.json();
} catch (error) {
  console.error("Error fetching estadisticas:", error);
  return [];
}
}
