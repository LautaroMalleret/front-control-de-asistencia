"use client";
import GraficoBarra from "./../../components/GraficoBarra";
import { useEffect, useState } from "react";
import { getFaltas, getTiempoRetrasos } from "@/app/api/asistencias";
import Falta from "@/app/models/faltas";
import TiempoRetraso from "@/app/models/tiempoRetraso";
import GraficoArea from "@/app/components/GraficoArea";
import Cumplimiento from "@/app/models/cumplimientos";
import {getCumplimientosData,  getRendimientosData,} from "@/app/api/produccion";
import GraficoTiempo from "@/app/components/GraficoTiempo";
import Rendimiento from "@/app/models/rendimiento";
//Pagina que muestra graficas con metricas de produccion
export default function MetricasProduccionPage() {
  const [faltasData, setFaltasData] = useState<Falta[]>([]);
  const [tiempoRetrasos, setTiempoRetrasos] = useState<TiempoRetraso[]>([]);

  const [cumplimientosMedialunas, setCumplimientosMedialunas] = useState<Cumplimiento[]>([]);
  const [cumplimientosPan, setCumplimientosPan] = useState<Cumplimiento[]>([]);
  const [cumplimientosTorta, setCumplimientosTorta] = useState<Cumplimiento[]>([]);

  const [rendimientosMedialunas, setRendimientosMedialunas] = useState<Rendimiento[]>([]);
  const [rendimientosPan, setRendimientosPan] = useState<Rendimiento[]>([]);
  const [rendimientosTorta, setRendimientosTorta] = useState<Rendimiento[]>([]);

  //obtengo los tiempos de retrasos por dia
  useEffect(() => {
    async function fetchTiempoRetrasos() {
      try {
        const data = await getTiempoRetrasos();
        setTiempoRetrasos(data);
      } catch (error) {
        console.error("Error fetching tiempo de retrasos data:", error);
      }
    }
    fetchTiempoRetrasos();
  }, []);

  //obtengo las faltas por dia
  useEffect(() => {
    async function fetchFaltasData() {
      try {
        const data = await getFaltas();
        setFaltasData(data);
      } catch (error) {
        console.error("Error fetching faltas data:", error);
      }
    }
    fetchFaltasData();
  }, []);

  //obtengo los cumplimientos de produccion por dia y tipo de producto
  useEffect(() => {
    async function fetchCumplimientosData(tipo: string) {
      try {
        const data = await getCumplimientosData(tipo);
        if (tipo === "Medialunas") {
          setCumplimientosMedialunas(data);
        }
        if (tipo === "Pan") {
          setCumplimientosPan(data);
        }
        if (tipo === "Torta") {
          setCumplimientosTorta(data);
        }
      } catch (error) {
        console.error("Error fetching faltas data:", error);
      }
    }

    fetchCumplimientosData("Medialunas");
    fetchCumplimientosData("Pan");
    fetchCumplimientosData("Torta");
  }, []);

  //obtengo los rendimientos de tiempo por dia y tipo de producto
  useEffect(() => {
    async function fetchRendimientosData(tipo: string) {
      try {
        const data = await getRendimientosData(tipo);
        if (tipo === "Medialunas") {
          setRendimientosMedialunas(data);
        }
        if (tipo === "Pan") {
          setRendimientosPan(data);
        }
        if (tipo === "Torta") {
          setRendimientosTorta(data);
        }
      } catch (error) {
        console.error("Error fetching faltas data:", error);
      }
    }

    fetchRendimientosData("Medialunas");
    fetchRendimientosData("Pan");
    fetchRendimientosData("Torta");
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Metricas de produccion
      </h1>
      <hr />
      <div className="w-full h-96 mt-8 p-3 ">
        <h2 className="text-3xl font-bold mb-4 mt-4 text-center">
          Estadisticas de faltas y retrasos
        </h2>
        <GraficoBarra data={faltasData} keys={["faltas"]} />
        <GraficoBarra data={tiempoRetrasos} keys={["minutos"]} />
        <hr className="my-8" />
        <h2 className="text-3xl font-bold mb-4 mt-8 text-center">
          Cumplimiento de produccion
        </h2>

        <h4 className="text-xl font-bold mb-2 text-center mt-10">Medialunas</h4>
        <GraficoArea data={cumplimientosMedialunas} />

        <h3 className="text-xl font-bold mb-2 text-center mt-10">Pan</h3>
        <GraficoArea data={cumplimientosPan} />

        <h3 className="text-xl font-bold mb-2 text-center mt-10">Torta</h3>
        <GraficoArea data={cumplimientosTorta} />
        <hr className="my-8" />
        <h2 className="text-3xl font-bold mb-4 mt-8 text-center">
          Control de tiempo operativo{" "}
        </h2>
        <h3 className="text-xl font-bold mb-2 text-center mt-10">Medialunas</h3>
        <GraficoTiempo data={rendimientosMedialunas} />

        <h3 className="text-xl font-bold mb-2 text-center mt-10">Pan</h3>
        <GraficoTiempo data={rendimientosPan} />

        <h3 className="text-xl font-bold mb-2 text-center mt-10">Tortas</h3>
        <GraficoTiempo data={rendimientosTorta} />
      </div>
    </div>
  );
}
