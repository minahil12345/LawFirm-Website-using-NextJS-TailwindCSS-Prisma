// ClientPortal.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientPortal() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [authError, setAuthError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errorObj = { username: '', password: '' };
    let hasError = false;

    if (!username) {
      errorObj.username = 'Please enter your username.';
      hasError = true;
    }
    if (!password) {
      errorObj.password = 'Please enter your password.';
      hasError = true;
    }

    setErrors(errorObj);
    if (hasError) return;

    // Send API request to backend
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (!data.success) {
      setAuthError('Invalid username or password.');
      return;
    }

    // Navigate to dynamic dashboard route
    router.push(`/client-dashboard/ClientDashboard`);
    // router.push(`/client-dashboard/${data.clientId}`);
  };

  return (
    <section id="client-portal" className="max-w-[1080px] mx-auto">
      <h2 className="text-lg font-bold border-l-4 border-black pl-2 mb-4">Client Portal</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="font-semibold">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter username"
          />
          {errors.username && <small className="text-red-600 text-sm block mt-1">{errors.username}</small>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter password"
          />
          {errors.password && <small className="text-red-600 text-sm block mt-1">{errors.password}</small>}
        </div>
        {authError && <p className="text-red-600 text-sm mb-2">{authError}</p>}
        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded font-bold hover:bg-black">Log In</button>
      </form>
    </section>
  );
}
