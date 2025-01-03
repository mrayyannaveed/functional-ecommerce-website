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
    <div className='mt-16 grid grid-cols-4 gap-10'>
        {data.map((val:any, index:number) => {
            return(
                <ProductCom key={index} title={val.title} price={val.price} image={val.imageUrl}/>
            )
        })}
    </div>
  )
}

export default Products