import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async () => {
    const fetchData = await client.fetch(`*[_type == 'heroSec']{
        "imageUrl": image.asset->url
    }`);
    return fetchData;
};

const Hero = async () => {
    const data = await getData();
    // console.log(data);
    return (
        <div className="carousel w-full">
            {data.map((val: any, index: number) => {
                const prevSlide = index === 0 ? data.length : index;
                const nextSlide = index === data.length - 1 ? 1 : index + 2; // +2 because IDs start from 1
                return (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <Image
                            src={val.imageUrl}
                            className="w-full h-[40vh]"
                            width={1000}
                            height={1000}
                            alt="hero"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <Link href={`#slide${prevSlide}`} className="btn btn-circle">
                                ❮
                            </Link>
                            <Link href={`#slide${nextSlide}`} className="btn btn-circle">
                                ❯
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Hero;
