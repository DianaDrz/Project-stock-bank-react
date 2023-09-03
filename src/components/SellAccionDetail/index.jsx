import { useContext } from 'react';
import { StockCartContext } from '../../Context';
import { totalPrice } from '../DataUsers/utils';
import './style.css'
import OrderAccionCard from '../OrderAccionCard';
import { XMarkIcon } from '@heroicons/react/24/solid'

const SellAccionDetail = () => {
const context =useContext(StockCartContext)

const hadleDelete=(id)=>{
  const filterAccions = context.cartAccions.filter(accion => accion.id !=id)
  context.setCartAccions(filterAccions)
}
const removeSoldAccions = (soldAccionsIds) => {
  const updatedBuyAccions = context.buyAccions.map((buy) => ({
    ...buy,
    accions: buy.accions.filter((accion) => !soldAccionsIds.includes(accion.id)),
  }));
  context.setBuyAccions(updatedBuyAccions);
};
  const handleSell = () => {
    console.log(context.count)
     const total = totalPrice(context.cartAccions);
      context.setUserBalance(context.userBalance + total);
      context.closeSellAccionDetail();
      const soldAccionsIds = context.cartAccions.map((accion) => accion.id);
      removeSoldAccions(soldAccionsIds)
      context.setCartAccions([])
      context.setCount(context.count - context.cartAccions.length)
  };


  return (
    <aside className={`${context.sellAccionDetailOpen ? 'flex' : 'hidden'} accion-detail flex-col fixed right-0 border border-black rounded-lg bg-white font-roboto`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl' >Vender Acciones</h2>
            <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeSellAccionDetail()}></XMarkIcon>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartAccions.map((accion, index) => (
            <OrderAccionCard
              key={index}
              id={accion.id}
              name={accion.name}
              photo={accion.photo}
              valueMonetary={accion.valueMonetary}
              handleDelete={hadleDelete}            
            />
          ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartAccions)}</span>
        </p>
        <button className='bg-blue-950 py-3 text-white w-full rounded-lg' onClick={()=>handleSell()}>Vender</button>
      </div>
    </aside>
  );
};

export default SellAccionDetail;
