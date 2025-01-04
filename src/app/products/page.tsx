import React from 'react'
import ProductCom from '../components/productCom'
import { client } from '@/sanity/lib/client';

const getData = async () => {
    const fetchData = await client.fetch(`*[_type == 'product']{
  title,price,
    "imageUrl": image.asset->url
}`);
    return fetchData;
};


const Products = async () => {
    const data = await getData();
    // console.log(data)
  return (
    <div className='mt-20 mb-16'>
      <h1 className='text-3xl font-bold text-center text-black'>Our Products</h1>
      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-14 w-[90vw] mx-auto'>
          {data.map((val:any, index:number) => {
            return(
              <ProductCom key={index} productId={index} title={val.title} price={val.price} image={val.imageUrl}/>
            )
          })}
      </div>
    </div>
  )
}

export default Products