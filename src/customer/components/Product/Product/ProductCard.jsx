import React from 'react'
import "./productCard.css"
import { useNavigate } from 'react-router-dom'
export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/product/${product.id}`)} className='productCard w-[15rem] border-3 border-gray-100 rounded-xl overflow-hidden m-3 transition-all cursor-pointer '>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
      </div>
      <div className='textPart bg-white p-3 '>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p className=''>{product.title}</p>

          <p className='font-semibold opacity-50'>{product.color}</p>
        </div>

        <div className='flex space-x-2 items-center'>
          <p className='font-semibold'>₹{product.discountedPrice}</p>
          <p className='opacity-50 line-through'>₹{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
        </div>

      </div>
    </div>
  )
}