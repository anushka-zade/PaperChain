import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import DocumentUpload from './pages/DocumentUpload';
import Verification from './pages/Verification';
import IssuerLoginDialog from './components/IssuerLoginDialog';
import VerifierLoginDialog from './components/VerifierLoginDialog';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    // Logic to handle login (e.g., authentication)
    // Upon successful login, set isLoggedIn to true and userType to the logged-in user's type
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
    setUserType(null);
  };

  return (
    <div>
      {/* Show login dialogs if user is not logged in */}
      {!isLoggedIn && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
        <IssuerLoginDialog onLogin={() => handleLogin('issuer')} />
        <VerifierLoginDialog onLogin={() => handleLogin('verifier')} />
      </div>
      
      )}

      {/* Show routes only if user is logged in */}
      {isLoggedIn && (
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {userType === 'issuer' && <Route path="/issue-document" element={<DocumentUpload />} />}
          {userType === 'verifier' && <Route path="/verify-document" element={<Verification />} />}
        </Routes>
      )}
    </div>
  );
};

export default App;
