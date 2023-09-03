import React from "react";
import { useContext } from "react";
import { StockCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'



const Card = (data) => {
  
  const context =useContext(StockCartContext)


  const addAccionCart = (accionData) => {
    context.setCount(context.count + 1)
    context.setCartAccions([...context.cartAccions, accionData])
    context.openAccionDetail()
  }
  const renderIcon = (id) => {
    const isInCart = context.cartAccions.filter(accion => accion.id === id).length > 0

    if (isInCart) {
      return (
         <div className="absolute top-0 right-0 flex justify-center bg-orange-500 w-8 h-8 rounded-full m-2 p-1 font-bold">
           <CheckIcon className="h-6 w-6 text-white" />
         </div>
      )
    } else {
      return (
        <div className="absolute top-0 right-0 flex justify-center bg-blue-700 w-8 h-8 rounded-full m-2 p-1 font-bold" 
        onClick={()=> addAccionCart(data.data)}>
          <PlusIcon className="h-6 w-6 text-white text-2xl" />
        </div>
      )
    }
  }
  return (
    <div 
    className="bg-white cursor-pointer w-43 h-43 rounded-lg font-roboto "
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
        {data.data.marketValue}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.photo}
          alt=""
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-base">{data.data.name}</span>
        <span className="text-lg font-bold">${data.data.valueMonetary}</span>
      </p>
    </div>
  );
};

export default Card;
