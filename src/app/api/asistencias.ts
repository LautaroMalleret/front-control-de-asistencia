import Asistencia from "../models/asistencia";
import Falta from "../models/faltas";
import TiempoRetraso from "../models/tiempoRetraso";
import Incidencia from "../models/incidencia";

const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Next.js

// Obtener todas las asistencias
export async function getAsistencias(): Promise<Asistencia[]> {
  try {
    const res = await fetch(`${apiUrl}/api/asistencias`, {
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
    const res = await fetch(`${apiUrl}/api/asistencias/tarde`, {
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
    const res = await fetch(`${apiUrl}/api/asistencias/faltas`, {
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
    const res = await fetch(`${apiUrl}/api/asistencias/tiempoDeRetraso`, {
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

export async function getIncidencias(): Promise<Incidencia[]> {
  try {
    const res = await fetch(`${apiUrl}/api/incidencia`, {
    });
    if(!res.ok){
      throw new Error("Failed to fetch incidencias");
    }
    return res.json();
  } catch (error )
  {
    console.error("Error fetching incidencias:", error);
    return [];
  }

}
