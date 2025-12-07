

export const validateToken = async (token: string): Promise<string> => {
    const res = await fetch('https://api-5lweajprsq-uc.a.run.app/auth/validate', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!res.ok) throw new Error("Invalid token");

    const userData = await res.json();
    return userData.data as string;
}