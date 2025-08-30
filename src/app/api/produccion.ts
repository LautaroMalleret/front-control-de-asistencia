import Cumplimiento from "../models/cumplimientos";
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