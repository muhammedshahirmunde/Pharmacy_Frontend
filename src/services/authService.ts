const baseUrl = import.meta.env.VITE_BASE_URL

export const loginUser = async (email: string, password: string) => {

  try {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json(); 
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await res.json();
    console.log("data", data)
    return data
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};