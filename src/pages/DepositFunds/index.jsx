import React, { useState } from 'react';
import Layout from "../../components/Layout";
import { useContext } from "react";
import { StockCartContext } from "../../Context";

function DepositFunds() {
  const context = useContext(StockCartContext);
  const [addNewFound, setAddNewFound] = useState("");

  const handleNewFound = (e) => {
    setAddNewFound(e.target.value);
  };

  const handleAddFound = () => {
    const newBalance = context.userBalance + parseFloat(addNewFound); 
    context.setUserBalance(newBalance);
    setAddNewFound(''); 
  };

  return (
    <Layout>      
      <div className='max-w-[400px] w-full mx-auto font-serif' >
        <p className='font-bold font-serif mt-6 text-orange-500 mb-2 text-center'>Depositar fondos</p>
        <div className='flex flex-col mb-2'>
          <label className='m-3 text-mybtn'>Tu fondo actual es: {context.userBalance}</label>
          <p className='m-3 text-mybtn'>Introduce la cantidad que deseas depositar</p>
          <input className='border relative bg-gray-100 p-2 rounded-lg' type="number" onChange={handleNewFound} value={addNewFound} />
        </div>
        <button className='w-full py-3 mt-8 bg-mybtn hover:bg-indigo-500 relative text-white rounded-lg font-medium' type='button' onClick={handleAddFound}>Depositar</button>
      </div>
    </Layout>
  );
}

export default DepositFunds;
