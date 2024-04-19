import React, { useState } from 'react';
import './LoginDialog.css'; // Import the CSS file

const VerifierLoginDialog = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
        onLogin();
      } else {
        // Handle invalid credentials (e.g., show error message)
        alert('Invalid username or password');
      }
  };

  return (
    <div className="login-dialog" style={{ width: '700px' }}>
      {/* Login form for verifiers */}
      <h2>Verifier Login</h2>
      <input type="text" className="input-field" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="login-button" onClick={handleLogin}>Login as Verifier</button>
    </div>
  );
};

export default VerifierLoginDialog;
