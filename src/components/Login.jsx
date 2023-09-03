import React, { useState } from 'react';
import {dataUsers} from './DataUsers/dataUsers';

function Login({ onLogin }) {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [pin, setPin] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const foundUser = dataUsers.find((user) => user.fullName === fullName && user.userName === userName);
    if (foundUser) { // Verifica si se encontró un usuario
      setShowMessage(true);
    } else {
      setErrorMessage('Usuario no encontrado.');
    }
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    const foundUser = dataUsers.find((user) => user.fullName === fullName && user.userName === userName);
      if (pin === foundUser.pin) {
        onLogin(fullName, userName);
      } else {
        setErrorMessage('PIN incorrecto. Inténtalo de nuevo.');
        setPin('');
      }
  
  };

  return (
    <div  className='relative w-full h-screen '>
    <div className='flex justify-center items-center h-full'>
      {!showMessage ? (
        <div>
        <form className='max-w-[400px] w-full mx-auto bg-myfoun p-8 rounded-lg' onSubmit={handleNameSubmit}>
          <h2 className='text-4xl font-bold text-center py-3 text-orange-500 font-serif'>Latinas stock bank</h2>
          <div className='flex flex-col mb-4'>
                <label className='text-orange-500 mb-2 font-serif'>Nombre completo:</label>
               <input className='border relative bg-gray-100 p-2 rounded-lg '  type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className='flex flex-col mb-4'>
                <label className='text-orange-500 mb-2 font-serif'>Usuario:</label>
               <input className='border relative bg-gray-100 p-2 rounded-lg' type="text" value={userName} onChange={(e) => setUserName(e.target.value)}  />
          </div>
          <button className='w-full py-3 mt-8 bg-mybtn hover:bg-indigo-500 relative text-white rounded-lg font-medium' type="submit">Ingresar</button>
        </form>
        {errorMessage && <p className='font-bold text-orange-600 text-center'>{errorMessage}</p>}
        </div>
      ) : (
        <div>
        <form className='max-w-[400px] w-full mx-auto bg-myfoun p-8 rounded-lg' onSubmit={handlePinSubmit}>
          <p className='font-semibold text-blue-950 p-4 font-serif '>Hola, {fullName}. Ingresa tu PIN para continuar.</p>
          <div className='flex flex-col '>
                <input className='border relative bg-gray-100 p-2 rounded-lg' type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
            </div>
          <button className='w-full py-3 mt-8 bg-mybtn hover:bg-indigo-500 relative text-white rounded-lg font-medium' type="submit">Continuar</button>
        </form>
        {<p className='font-bold text-orange-600 text-center'>{errorMessage}</p>}
        </div>
      )}
          

    </div>
    </div>
  );
}

export default Login;
