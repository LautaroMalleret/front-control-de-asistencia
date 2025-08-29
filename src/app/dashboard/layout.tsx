"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

//Layout del dashboard con la barra de navegacion
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  //Estilos para la barra de navegacion
  const navLinkClasses = (path: string) =>
    `py-2 px-6 font-semibold transition-colors duration-300 ${
      pathname === path
        ? "border-b-2 border-blue-500 text-blue-600"
        : "text-gray-500 hover:text-blue-600"
    }`;

  return (
    <div>
      <div>
        <nav className="flex flex-row justify-around border-b mb-4">
          <Link
            href="/dashboard/control-empleados"
            className={navLinkClasses("/dashboard/control-empleados")}
          >
            CONTROL DE EMPLEADOS
          </Link>
          <Link
            href="/dashboard/asistencia"
            className={navLinkClasses("/dashboard/asistencia")}
          >
            ASISTENCIA
          </Link>
          <Link
            href="/dashboard/metricas-produccion"
            className={navLinkClasses("/dashboard/metricas-produccion")}
          >
            METRICAS DE PRODUCCION
          </Link>
        </nav>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
