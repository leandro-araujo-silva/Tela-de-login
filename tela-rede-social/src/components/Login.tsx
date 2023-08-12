// src/components/Login.tsx

import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    onLogin(username, password);

    // Redirect the user to the specified URL after successful login
    window.location.href = 'https://rede-social-psi.vercel.app/';
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Tela de Login</h2>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
