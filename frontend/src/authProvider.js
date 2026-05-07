const apiUrl = import.meta.env.VITE_API_URL;

export const authProvider = {
    login: async ({ username, password }) => {
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: username, password }),
        });
        if (!response.ok) {
            throw new Error('Email ou mot de passe incorrect');
        }
        const { token, user } = await response.json();
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));
    },
    logout: () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth_token')
            ? Promise.resolve()
            : Promise.reject();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const user = JSON.parse(localStorage.getItem('auth_user') || '{}');
            return Promise.resolve({ id: user.id, fullName: user.email });
        } catch {
            return Promise.reject();
        }
    },
    getPermissions: () => Promise.resolve(''),
};
