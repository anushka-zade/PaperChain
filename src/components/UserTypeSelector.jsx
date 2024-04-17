import React from 'react';

const UserTypeSelector = ({ onSelect }) => {
  const handleUserTypeSelect = (type) => {
    onSelect(type);
  };

  return (
    <div>
      <h2>Choose User Type</h2>
      <button onClick={() => handleUserTypeSelect('issuer')}>Issuer</button>
      <button onClick={() => handleUserTypeSelect('verifier')}>Verifier</button>
    </div>
  );
};

export default UserTypeSelector;
