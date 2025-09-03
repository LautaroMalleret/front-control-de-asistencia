const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Next.js

export async function login(email: string, password: string){
    const response = await fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response;
}
