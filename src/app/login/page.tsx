"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../api/login';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Reemplaza 'https://tu-api.com/login' con el endpoint real de tu API
      const response = await login(email, password)
    //   const response = await fetch('https://tu-api.com/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

      if (response.ok) {
        // Suponiendo que la API devuelve un token o una confirmación
        const data = await response.json();
        console.log('Login successful:', data);
        // Redirigir al dashboard
        router.push('/dashboard');
      } else {
        // Manejar errores de la API (ej. credenciales incorrectas)
        const errorData = await response.json();
        setError(errorData.message || 'Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    } catch (err) {
      // Manejar errores de red u otros
      setError('No se pudo conectar al servidor. Inténtalo de nuevo más tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Iniciar Sesión</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </div>
        </form>
        <p className='text-sm text-gray-700'>Para acceder ingrese: <br />
        Email: demo@demo.com <br />
        Contraseña: 12345
        </p>
      </div>
    </div>
  );
}
