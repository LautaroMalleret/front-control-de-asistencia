// import Empleado from "../models/empleado"

// interface ModalNuevoEmpleadoProps{
//     empleado: Empleado;
//     onClose: () => void;
//     onSave: (empleado: Empleado) => void;
// }
// const ModalNuevoEmpleado: React.FC<ModalNuevoEmpleadoProps> = ({empleado, onClose, onSave}) =>{
const ModalNuevoEmpleado = () =>{
    return (
        <div className="  bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl mb-4">Nuevo Empleado</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre</label>
                        <input type="text" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Apellido</label>
                        <input type="text" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Rol</label>
                        <input type="text" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Area</label>
                        <input type="text" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Turno</label>
                        <input type="text" className="w-full border rounded px-3 py-2" />
                    </div>
                </form>
                {/* <div className="flex justify-end gap-4">
                    <button 
                        // onClick={onClose} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancelar
                    </button>
                    <button 
                        // onClick={() => onSave(empleado)} 
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Guardar
                    </button>
                </div> */}
            </div>
        </div>
    );
};
export default ModalNuevoEmpleado;