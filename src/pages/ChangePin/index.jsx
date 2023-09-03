import React, { useState } from 'react';
import { dataUsers } from '../../components/DataUsers/dataUsers';
import Layout from "../../components/Layout";

function ChangePin({fullName}) {
    const [currentPin, setCurrentPin] = useState('');
    const [newPin, setNewPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleCurrentPinChange = (e) => {
      setCurrentPin(e.target.value);
    };
  
    const handleNewPinChange = (e) => {
      setNewPin(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const foundUser = dataUsers.find((user) => user.fullName === fullName);
      console.log('este es el usuario',foundUser.fullName)
      if (!foundUser) {
        setErrorMessage('Usuario no encontrado');
        return;
      }

      if (currentPin !== foundUser.pin) {
        setErrorMessage('PIN actual incorrecto');
        return;
      }
      foundUser.pin = newPin;
      setErrorMessage('PIN cambiado exitosamente!');
      console.log('Nuevo pin',foundUser.pin)
      setCurrentPin('');
      setNewPin('');
    };
    return (
      <Layout>
              <form className='max-w-[400px] w-full mx-auto' onSubmit={handleFormSubmit} >
                <p className='text-2xl  text-center py-10 font-bold text-orange-500 font-serif'>Cambiar PIN</p>
                <div className='flex flex-col mb-4'>
                      <label className='text-orange-500 mb-2 font-serif'>PIN ACTUAL</label>
                    <input className='border relative bg-gray-100 p-2 rounded-lg'  type="text"  onChange={handleCurrentPinChange}/>
                </div>
                <div className='flex flex-col mb-4'>
                      <label className='text-orange-500 mb-2 font-serif'>PIN Nuevo</label>
                    <input className='border relative bg-gray-100 p-2 rounded-lg' type="text" onChange={handleNewPinChange} />
                </div>
                <button className='w-full py-3 mt-8 bg-mybtn hover:bg-indigo-500 relative text-white rounded-lg font-medium' type="submit">Cambiar</button>
              </form>
              {errorMessage && <p className='font-bold text-orange-600 p-5'>{errorMessage}</p>}
      </Layout>
    );
  }
  
  export default ChangePin;
  

  