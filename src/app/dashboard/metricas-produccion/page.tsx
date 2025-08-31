"use client";
import {  useEffect, useState } from "react";

import Cumplimiento from "@/app/models/cumplimientos";
import {getCumplimientosData,  getRendimientosData, getEstadisticasData} from "@/app/api/produccion";
import GraficoTiempo from "@/app/components/GraficoTiempo";
import Rendimiento from "@/app/models/rendimiento";
import GraficoBarraMix from "@/app/components/GraficoBarraMix";
import GraficoEstadisticaGral from "@/app/components/GraficoEstadisticaGral";
import Estadistica from "@/app/models/estadistica";
import GraficoLinea from "@/app/components/GraficoLinea";
import Oee from "@/app/models/oee";
import { getOeeData } from "@/app/api/produccion";
//Pagina que muestra graficas con metricas de produccion
export default function MetricasProduccionPage() {
  // const [faltasData, setFaltasData] = useState<Falta[]>([]);
  // const [tiempoRetrasos, setTiempoRetrasos] = useState<TiempoRetraso[]>([]);

  const [cumplimientosMedialunas, setCumplimientosMedialunas] = useState<Cumplimiento[]>([]);
  const [cumplimientosPan, setCumplimientosPan] = useState<Cumplimiento[]>([]);
  const [cumplimientosTorta, setCumplimientosTorta] = useState<Cumplimiento[]>([]);

  const [rendimientosMedialunas, setRendimientosMedialunas] = useState<Rendimiento[]>([]);
  const [rendimientosPan, setRendimientosPan] = useState<Rendimiento[]>([]);
  const [rendimientosTorta, setRendimientosTorta] = useState<Rendimiento[]>([]);

  const [estadisticasMedialunas, setEstadisticasMedialunas] = useState<Estadistica[]>([]);
  const [estadisticasPan, setEstadisticasPan] = useState<Estadistica[]>([]);
  const [estadisticasTorta, setEstadisticasTorta] = useState<Estadistica[]>([]);

  const [oeeData, setOeeData] = useState<Oee[]>([]);

useEffect(() => {
    async function fetchOeeData() {
      try {
        const data = await getOeeData();
        setOeeData(data);
      } catch (error) {
        console.error("Error fetching oee data:", error);
      }
    }
    
    fetchOeeData();
  }, []);



useEffect(() => {
    async function fetchEstadisticasData(tipo: string) {
      try {
        const data = await getEstadisticasData(tipo);
        if (tipo === "Medialunas") {
          setEstadisticasMedialunas(data);
        }
        if (tipo === "Pan") {
          setEstadisticasPan(data);
        }
        if (tipo === "Torta") {
          setEstadisticasTorta(data);
        }
      } catch (error) {
        console.error("Error fetching estadisticas data:", error);
      }
    }

    fetchEstadisticasData("Medialunas");
    fetchEstadisticasData("Pan");
    fetchEstadisticasData("Torta");
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
        <h2 className="text-2xl font-bold mb-4 text-center">
          Estadisticas OEE por producto
          </h2>
        <GraficoLinea data={oeeData} />



        <h2 className="text-3xl font-bold mb-4 mt-8 text-center">
          Estadisticas generales de produccion
        </h2>
                <h3 className="text-xl font-bold mb-2 text-center mt-10">Medialunas</h3>
                <GraficoEstadisticaGral data = {estadisticasMedialunas} />
                <h3 className="text-xl font-bold mb-2 text-center mt-10">Pan</h3>
                <GraficoEstadisticaGral data = {estadisticasPan} />
                <h3 className="text-xl font-bold mb-2 text-center mt-10">Tortas</h3>
                <GraficoEstadisticaGral data = {estadisticasTorta} />
        <hr className="my-8" />

        <h2 className="text-3xl font-bold mb-4 mt-8 text-center">
          Cumplimiento de produccion
        </h2>

        <h4 className="text-xl font-bold mb-2 text-center mt-10">Medialunas</h4>
        <GraficoBarraMix data={cumplimientosMedialunas} />

        <h3 className="text-xl font-bold mb-2 text-center mt-10">Pan</h3>
        <GraficoBarraMix data={cumplimientosPan} />

        <h3 className="text-xl font-bold mb-2 text-center mt-10">Torta</h3>
        <GraficoBarraMix data={cumplimientosTorta} />
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
