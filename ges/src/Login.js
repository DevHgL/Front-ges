import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate de forma específica
import './styles.css';

function Login() {
  const navigate = useNavigate(); // Crie uma instância do useNavigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ainda falta implementar a lógica de login e comunicação com o servidor
    console.log('Usuário:', username);
    console.log('Senha:', password);

    if (username === 'usuario' && password === 'senha') {
      navigate('/home'); // Utilize navigate para redirecionar após o login bem-sucedido
    } else {
      alert('Erro de login ou senha!')   
    }
  };

  return (
    <div id="container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">GSE - Gerenciamento de Eventos e Sinistros</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="submit">
          Entrar
        </button>
        <p className="signup-link">
          <a href="/forgot-password">Esqueceu sua senha?</a>

        </p>
      </form>
    </div>
  );
}

export default Login;
