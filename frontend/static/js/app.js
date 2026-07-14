const API_BASE_URL = '/';

function getToken() {
    return localStorage.getItem('access_token');
}

function setToken(token) {
    localStorage.setItem('access_token', token);
}

function removeToken() {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
}

function getAuthHeaders() {
    const token = getToken();
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
}

async function fetchWithAuth(url, options = {}) {
    const headers = { ...getAuthHeaders(), ...options.headers };
    const response = await fetch(url, { ...options, headers });
    
    if (response.status === 401) {
        removeToken();
        return null;
    }
    
    return response;
}

async function login(username, password) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    
    const response = await fetch(`${API_BASE_URL}auth/login`, {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) {
        const error = await response.json();
        return { success: false, message: error.detail };
    }
    
    const data = await response.json();
    setToken(data.access_token);
    return { success: true, data };
}

async function register(username, email, password, full_name) {
    const response = await fetch(`${API_BASE_URL}auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, email, password, full_name })
    });
    
    if (!response.ok) {
        const error = await response.json();
        return { success: false, message: error.detail };
    }
    
    const data = await response.json();
    return { success: true, data };
}

async function getUserProfile() {
    const response = await fetchWithAuth(`${API_BASE_URL}auth/me`);
    if (!response) return null;
    
    if (!response.ok) {
        return null;
    }
    
    return await response.json();
}

async function getUsers() {
    const response = await fetchWithAuth(`${API_BASE_URL}users/`);
    if (!response) return [];
    
    if (!response.ok) {
        return [];
    }
    
    return await response.json();
}

async function updateProfile(full_name, email, password) {
    const params = new URLSearchParams();
    if (full_name) params.append('full_name', full_name);
    if (email) params.append('email', email);
    if (password) params.append('password', password);
    
    const response = await fetchWithAuth(`${API_BASE_URL}users/me`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
    });
    
    if (!response) return { success: false, message: 'Unauthorized' };
    
    if (!response.ok) {
        const error = await response.json();
        return { success: false, message: error.detail };
    }
    
    return { success: true };
}

async function deleteUser(userId) {
    const response = await fetchWithAuth(`${API_BASE_URL}users/${userId}`, {
        method: 'DELETE'
    });
    
    if (!response) return { success: false, message: 'Unauthorized' };
    
    if (!response.ok) {
        const error = await response.json();
        return { success: false, message: error.detail };
    }
    
    return { success: true };
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.insertBefore(errorDiv, document.body.firstChild);
    setTimeout(() => errorDiv.remove(), 5000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.insertBefore(successDiv, document.body.firstChild);
    setTimeout(() => successDiv.remove(), 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            removeToken();
        });
    }
    
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        const currentPath = window.location.pathname;
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});