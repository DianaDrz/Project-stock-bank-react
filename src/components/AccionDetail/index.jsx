import { useContext } from 'react';
import { StockCartContext } from '../../Context';
import OrderAccionCard from '../OrderAccionCard';
import { totalPrice } from '../DataUsers/utils';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

const AccionDetail = () => {
const context =useContext(StockCartContext)

const hadleDelete=(id)=>{
  const filterAccions = context.cartAccions.filter(accion => accion.id !=id)
  context.setCartAccions(filterAccions)
}
  const handleBuy = () => {
    const total = totalPrice(context.cartAccions);

    if (total <= context.userBalance) {
      const orderToAdd = {
        date: '03/49/4',
        accions: context.cartAccions,
        totalAccions: context.cartAccions.length,
        totalPrice: total,
      };
      context.setBuyAccions([...context.buyAccions, orderToAdd]);
      context.setUserBalance(context.userBalance - total);
      context.closeAccionDetail();
      context.setCartAccions([])
    } else {
      alert('La compra excede tu fondo disponible.');
    }
  };


  return (
    <aside className={`${context.accionDetailOpen ? 'flex' : 'hidden'} accion-detail flex-col fixed right-0 border border-orange-500 rounded-lg bg-white font-roboto`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl' >Comprar Acciones</h2>
            <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeAccionDetail()}></XMarkIcon>
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
          <span className='font-roboto font-bold text-mybtn'>Total:</span>
          <span className='font-bold text-2xl'>${totalPrice(context.cartAccions)}</span>
        </p>
        <button className='bg-mybtn py-3 text-white w-full rounded-lg' onClick={()=>handleBuy()}>Comprar</button>
      </div>
    </aside>
  );
};

export default AccionDetail;
