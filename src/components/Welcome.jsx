import React from 'react';

function Welcome({ fullName }) {
  return (
    <div className="welcome">
      <p>Hola, {fullName}. Ingresa tu PIN para continuar</p>
    </div>
  );
}

export default Welcome;