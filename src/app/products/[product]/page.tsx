"use client";

import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa6';
import {PortableText} from '@portabletext/react'
import React from 'react';



const Product = async (props:any) => {
  const [cartItem, setCartItem] = useState(1)
  
  // const addCartItem = () => {
  //   setCartItem(cartItem + 1);
  // };
  
  // const subCartItem = () => {
  //   setCartItem(cartItem > 1 ? cartItem - 1 : 1);
  // };

  const fetchData = await client.fetch(`*[_type == 'product'][${parseInt(props.params.product)}]{
    title,price,content,
    "imageUrl": image.asset->url
    }`);
  
  console.log(fetchData.content)

  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded w-full h-full" alt="hero" src={fetchData.imageUrl} width={1000} height={1000}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{fetchData.title}
      </h1>
      <p className='mb-10'>
      <PortableText value={fetchData.content}/>
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <Button className="inline-flex text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
    setCartItem(cartItem > 1 ? cartItem - 1 : 1)}}><FaMinus/></Button>
        <p className="inline-flex text-gray-900 bg-white border-0 px-3 focus:outline-none rounded text-lg" >{cartItem}</p>
        <Button  className="inline-flex text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
    setCartItem(cartItem + 1);
  }}><FaPlus/></Button>
        <Button className="ml-4 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Add to Cart</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Product