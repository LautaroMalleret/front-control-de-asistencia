import Cumplimiento from "../models/cumplimientos";

export async function getCumplimientosData(tipo_producto: string): Promise<Cumplimiento[]> {
    try {
      const res = await fetch(`http://localhost:4000/api/produccion/cumplimiento/${tipo_producto}`, {
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