export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`172.20.10.13:3000/api/auth/login`, {
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