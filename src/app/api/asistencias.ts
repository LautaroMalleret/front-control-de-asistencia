import Asistencia from "../models/asistencia";
import Falta from "../models/faltas";
import TiempoRetraso from "../models/tiempoRetraso";

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


//obtener faltas
export async function getFaltas(): Promise<Falta[]> {
  try {
    const res = await fetch("http://localhost:4000/api/asistencias/faltas", {
    });
    if (!res.ok) {
      throw new Error("Failed to fetch faltas");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching faltas:", error);
    return [];
  }
}

//obtener tiempo de retrasos
export async function getTiempoRetrasos(): Promise<TiempoRetraso[]> {
  try {
    const res = await fetch("http://localhost:4000/api/asistencias/tiempoDeRetraso", {
    });
    if (!res.ok) {
      throw new Error("Failed to fetch tiempo de retrasos");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching tiempo de retrasos:", error);
    return [];
  }
}