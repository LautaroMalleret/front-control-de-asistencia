import Asistencia from "../models/asistencia";

// Obtener todas las asistencias
export async function getAsistencias(): Promise<Asistencia[]> {
  try {
    const res = await fetch("http://localhost:4000/api/asistencias", {
    });
    if (!res.ok) {
      throw new Error("Failed to fetch asistencias");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching asistencias:", error);
    return [];
  }
}

// Obtener llegadas tarde
export async function getLlegadasTarde(): Promise<Asistencia[]> {
  try {
    const res = await fetch("http://localhost:4000/api/asistencias/tarde", {
    });
    if (!res.ok) {
      throw new Error("Failed to fetch asistencias");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching asistencias:", error);
    return [];
  }
}
