import React, { useState } from "react";
import { guardarEmpleado, obtenerUltimoId } from "@/app/api/empleados"; // Debes definir esta función en tu API

const roles = ["operario", "supervisor", "calidad"];
const areas = ["produccion", "envasado", "calidad", "deposito"];
const turnos = ["mañana", "tarde", "noche"];

export default function NuevoEmpleadoForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rol, setRol] = useState(roles[0]);
  const [area, setArea] = useState(areas[0]);
  const [turno, setTurno] = useState(turnos[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const empleado = {nombre, apellido, rol, area, turno };
    await guardarEmpleado(empleado);
    // Puedes agregar lógica para limpiar el formulario o mostrar un mensaje
    setNombre("");
    setApellido("");
    setRol(roles[0]);
    setArea(areas[0]);
    setTurno(turnos[0]);
    const ultimoId = await obtenerUltimoId();
    console.log("ultimo id:" + ultimoId);
    alert("Empleado guardado con éxito, ID: " + ultimoId+ ".");
  };

  return (
    <form className="p-4 flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={e => setApellido(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <select value={rol} onChange={e => setRol(e.target.value)} className="border p-2 rounded">
        {roles.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <select value={area} onChange={e => setArea(e.target.value)} className="border p-2 rounded">
        {areas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>
      <select value={turno} onChange={e => setTurno(e.target.value)} className="border p-2 rounded">
        {turnos.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  );
}


