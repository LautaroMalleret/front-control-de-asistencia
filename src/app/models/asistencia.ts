//Modelo de datos para la asistencia
export default interface Asistencia {
    id: string;
    empleado_id: string;
    empleados :{
        nombre: string;
        apellido: string;
    },
    fecha: string;
    hora_ingreso: string;
    hora_egreso: string | null;
    retraso_entrada: string | null;
}
