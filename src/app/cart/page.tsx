"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Cart = (props:any) => {
  const [cartItem, setCartItem] = useState(1)
  const [carts, setCarts] = useState('hidden');
  return (
    <div id='cart' className={`${carts}`}>
          <section className='w-[430px] bg-gray-800 text-white fixed inset-[178px_0_0_auto] md:inset-[88px_0_0_auto] grid grid-rows-[70px_1fr_70px] transition-[0.5s]' id='cartTab'>
            <h2 className='text-2xl p-5 font-medium md:text-3xl xl:text-4xl m-0'>Shopping Cart</h2>
            <div className='overflow-auto p-1' id='listCart'>
              <div className='grid grid-cols-[70px_130px_50px_1fr] gap-[10px] text-center'>
                <div className=''><Image className='w-full' src={props.image} alt={props.title} width={1500} height={1500}/></div>
                <div className=''>{props.title}</div>
                <div className=''>{props.price}</div>
                  <div className="flex justify-center gap-2 mt-3">
                      <Button className="inline-flex items-center  h-6 w-6 text-center text-black bg-white border-0 py-2 px-3 focus:outline-none hover:bg-slate-300 rounded-full justify-center text-sm" onClick={() => {
                        setCartItem(cartItem > 1 ? cartItem - 1 : 1)}}><FaMinus/></Button>
                        <p className="inline-flex items-center  h-6 w-6 text-center text-white border-0 px-3 bg-transparent focus:outline-none rounded-full justify-center text-[15px]" >{cartItem}</p>
                        <Button  className="inline-flex items-center  h-6 w-6 text-center text-black bg-white border-0 py-2 px-3 focus:outline-none hover:bg-slate-300 rounded-full justify-center text-sm" onClick={() => {
                          setCartItem(cartItem + 1);
                          }}><FaPlus/></Button>
                  </div>
              </div>
            </div>
            <div className='grid grid-cols-[repeat(2,1fr)]'>
              <Button className='bg-[#ddb74d] py-9 border-none font-medium text-gray-900 hover:bg-slate-500
              hover:text-white' id='close' onClick={() => {setCarts('hidden')}}>CLOSE</Button>
              <Button className='bg-[#e4c135] py-9  border-none font-medium text-gray-900 hover:bg-slate-500 hover:text-white'>CHECK OUT</Button>
            </div>
          </section>
      </div>
  )
}

export default Cart