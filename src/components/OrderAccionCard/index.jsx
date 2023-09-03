import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderAccionCard = props => {
  const { id,name, photo, valueMonetary,handleDelete } = props
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
  }
  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={photo}  />
        </figure>
        <p className='text-sm font-light'>{name}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{valueMonetary}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderAccionCard