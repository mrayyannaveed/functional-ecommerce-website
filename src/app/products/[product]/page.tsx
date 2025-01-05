"use client";

import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';
import Cart from '@/app/cart/page';
import Link from 'next/link';
// import { useState } from 'react';



const Product = async (props:any) => {
  // const [carts, setCarts] = useState('hidden');
  const fetchData = await client.fetch(`*[_type == 'product'][${parseInt(props.params.product)}]{
    title,price,content,
    "imageUrl": image.asset->url
    }`);

  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded w-full h-full" alt="hero" src={fetchData.imageUrl} width={1000} height={1000}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{fetchData.title}
      </h1>
      <div className='mb-10'>
      <PortableText value={fetchData.content}/>
      </div>
      {/* <Link href={"/cart"}> */}
        <Button className="ml-4 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Add to Cart</Button>
      {/* </Link> */}
    </div>
  </div>
  {/* <div className='hidden'> */}
            <Cart image={fetchData.imageUrl} title={fetchData.title} price={fetchData.price}/>
  {/* </div> */}

</section>
  )
}

export default Product