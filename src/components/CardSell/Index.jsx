import React from "react";
import { useContext } from "react";
import { StockCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'
const CardSell = (data) => {
  const context = useContext(StockCartContext)

  const addAccionCart = (accionData) => {
    context.setCartAccions([...context.cartAccions, accionData])
    context.openSellAccionDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartAccions.filter(accion => accion.id === id).length > 0

    if (isInCart) {
      return (
        <div className=" bg-orange-600 w-8 h-8 rounded-full flex justify-center m-2 p-1  ">
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      )
    } else {
      return (
        <div onClick={() => addAccionCart(data.data)} className="bg-mybtn w-8 h-8 rounded-full flex justify-center m-2 p-1 ">
          <PlusIcon className="h-6 w-6 text-white text-2xl" />
        </div>
      )
    }
  }
  return (
    <div className="flex justify-between items-center mb-3 font-roboto">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={data.data.photo} />
        </figure>
        <p className='text-sm font-light'>{data.data.name}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-bold'>$ {data.data.valueMonetary}</p>
        {renderIcon(data.data.id)}

      </div>
    </div>
  )
}

export default CardSell